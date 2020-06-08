import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

export function renderLink(to: string, content: React.ReactNode | string) {
    return (
        <Link component={RouterLink} to={to} >{content}</Link>
    );
}


export function renderHex(row: object, fieldName: string, fieldValue: object) {
    const hex = parseInt(fieldValue).toString(16);

    return '0x' + hex;
}