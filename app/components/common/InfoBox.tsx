import React from 'react';
import { observer } from 'mobx-react';
import { Alert, AlertTitle } from '@material-ui/lab';

export default observer(function InfoBox({children}) {
    return (
        <Alert variant='filled' severity='info'>
            <AlertTitle>Info</AlertTitle>
            {children}
        </Alert>
    );
})