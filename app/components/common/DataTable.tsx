import React from 'react';
import { Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';
import { observer } from 'mobx-react';

interface HighlightRule {
    match: (row: object) => string;
    style: object;
}

interface CellRenderer {
    (row: object, fieldName: string): string;
}

interface CellRenderers {
    [key: string]: CellRenderer;
}

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
            return (renderer(row, fieldName));
        }
    }
    
    return row[fieldName];
}


export default observer(function DataTable({ data, fields, keyField, highlightRules, renderers}) {
    if (!data || data.length === 0) return null;

    console.log('Fields:', Object.keys(data[0]));

    return (
        <Table size='small'>
            <TableHead>
                <TableRow>
                    {fields.map(f => {
                        return (
                            <TableCell key={f}>{f}</TableCell>
                        );
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(row => {
                    const style = getRowStyle(highlightRules, row);

                    return (
                        <TableRow key={row[keyField]} style={style}>
                            {fields.map(f => {
                                return <TableCell key={row[keyField] + f} style={style}>
                                    {getCellValue(renderers, row, f)}
                                </TableCell>
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    );
})