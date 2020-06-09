import React from 'react';
import { observer } from 'mobx-react';
import { isFunction } from 'util';
import MaterialTable, { Column } from 'material-table';
import { tableIcons } from './DataTableIcons';

interface HighlightRule {
    match: (row: object) => string;
    style: object;
}

type CellRenderer = (row: object, fieldName: string, fieldValue: object) => string;

interface CellRenderers {
    [key: string]: CellRenderer;
}

type KeyHandler = (row: object) => string | string;

function getRowStyle(highlightRules: HighlightRule[] | null, row: object) {
    if (!highlightRules) return null;

    let result = null;

    highlightRules.forEach(rule => {
        if (rule.match(row)) result = rule.style;
    });

    return result;
}

function getCellValue(renderers: CellRenderers | null, row: object, fieldName: string): string {
    if (renderers) {
        const renderer = renderers[fieldName];
        if (renderer) {
            return (renderer(row, fieldName, row[fieldName]));
        }
    }
    
    return row[fieldName];
}

function getRowKey(row: object, keyField: KeyHandler) {
    if (isFunction(keyField)) return keyField(row);

    return row[keyField];
}

interface PropTypes {
    title: string;
    data: Array<any>;
    fields: Array<string>;
    keyField: KeyHandler;
    highlightRules: HighlightRule[] | null;
    renderers: CellRenderers | null;
    isLoading: boolean;
}

function getColumns(fields: Array<string>, renderers: CellRenderers | null): any {
    return fields.map(f => {
        const renderer = renderers && renderers[f];
        const wrappedRenderer = renderer ? (row) => renderer(row, f, row[f]) : null;

        return {
            title: f, 
            field: f, 
            render: wrappedRenderer
        }
    });
}


export default observer(function DataTable({ title, data, fields, keyField, highlightRules, renderers, isLoading}: PropTypes) {
    if (!data || data.length === 0) return null;

    const dataFields = Object.keys(data[0]);
    console.log('Fields:', dataFields);

    if (!fields) fields = dataFields;

    return (
        <MaterialTable
                isLoading={isLoading}
                title={title}                
                columns={getColumns(fields, renderers)}
                data={data}
                icons={tableIcons}
                options={{
                    sorting: true,
                    toolbar: true,
                    search: true,
                    pageSize: Math.min(50, data.length),
                    pageSizeOptions: [10, 20, 50, 100],
                    exportButton: true,
                    padding: 'dense'
                }}
                rowStyle={row => getRowStyle(highlightRules, row)}
            />
    )


    // return (
    //     <Table size='small'>
    //         <TableHead>
    //             <TableRow>
    //                 {fields.map(f => {
    //                     return (
    //                         <TableCell key={f}>{f}</TableCell>
    //                     );
    //                 })}
    //             </TableRow>
    //         </TableHead>
    //         <TableBody>
    //             {data.map(row => {
    //                 const style = getRowStyle(highlightRules, row);

    //                 return (
    //                     <TableRow key={getRowKey(row, keyField)} style={style}>
    //                         {fields.map(f => {
    //                             return <TableCell key={row[keyField] + f} style={style}>
    //                                 {getCellValue(renderers, row, f)}
    //                             </TableCell>
    //                         })}
    //                     </TableRow>
    //                 )
    //             })}
    //         </TableBody>
    //     </Table>
    // );
})