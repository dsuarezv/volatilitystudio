import React from 'react';
import { Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';
import { observer } from 'mobx-react';


export default observer(function DataTable({ data, fields, keyField }) {
    if (!data || data.length === 0) return null;    

    console.log(data);

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
                    return (
                        <TableRow key={row[keyField]}>
                            {fields.map(f => {
                                return <TableCell key={row[keyField] + f}>{row[f]}</TableCell>
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    );
})