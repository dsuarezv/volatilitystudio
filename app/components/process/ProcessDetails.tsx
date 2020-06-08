import React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { useStore } from '../../store/Store';
import ProcessInfoHeader from './ProcessInfoHeader';
import { Grid } from '@material-ui/core';
import Dlls from '../dlls/Dlls';

export default withRouter(observer(function ProcessDetails(p) {
    const pid = p.match.params.pid;
    const store = useStore().Processes;

    return (
        <Grid container spacing={3}>
            <ProcessInfoHeader pid={pid} />
            <Dlls pid={pid} />
        </Grid>
    );
}))