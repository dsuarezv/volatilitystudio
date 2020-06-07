import React, { useEffect } from 'react';
import { useStore } from '../../store/Store';
import { CircularProgress } from '@material-ui/core';
import DataTable from '../common/DataTable';
import { observer } from 'mobx-react';


export default observer(function ProcessList() {
    const store = useStore().Processes;

    useEffect( () => {
        if (!store.all) store.psscan();
    }, [store.all]);

    if (store.loading) return <CircularProgress />

    return (
        <div>
            <h1>ProcessList</h1>
            <DataTable 
                data={store.all} 
                fields={['PID', 'PPID', 'Offset', 'ImageFileName', 'Threads', 'Handles', 'CreateTime', 'ExitTime']} 
                keyField='PID'
            />
        </div>
    );
})