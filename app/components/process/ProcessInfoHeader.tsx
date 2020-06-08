import React from 'react';
import { observer } from 'mobx-react';
import { Grid, Paper } from '@material-ui/core';
import { useStore } from '../../store/Store';
import { findBy } from '../../utils/Data';

export default observer(function ProcessInfoHeader({pid}) {
    const store = useStore().Processes;
    const process = findBy(store.all, 'PID', pid);

    return (
        <Grid item xs={12} md={12} lg={12}>
            {process ? 
                <h2>{pid} - {process.ImageFileName}</h2>
                :
                <h2>{pid}</h2>
            }
        </Grid>
    );
})