import React from 'react';
import { Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';
import { observer } from 'mobx-react';

export interface HighlightRule {
    match: (row: object) => string;
    style: object;
}


function getRowStyle(highlightRules: HighlightRule[] | null, row: object) {
    if (!highlightRules) return null;

    let result = null;

    highlightRules.forEach(rule => {
        if (rule.match(row)) result = rule.style;
    });

    return result;
}


export default observer(function DataTable({ data, fields, keyField, highlightRules}) {
    if (!data || data.length === 0) return null;

    console.log('Fields:', Object.keys(data[0]));

    return (
        <Table>
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
                                return <TableCell key={row[keyField] + f} style={style}>{row[f]}</TableCell>
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    );
})