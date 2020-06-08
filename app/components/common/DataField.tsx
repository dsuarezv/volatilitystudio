import React from 'react';
import { observer } from 'mobx-react';

export default observer(function DataField({name, value}) {
    return (
        <p>
            <span style={{ fontWeight: 'bold' }}>{name}</span>: <span>{value}</span>
        </p>
    );
})