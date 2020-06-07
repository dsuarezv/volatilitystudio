import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { CircularProgress } from '@material-ui/core';
import { useStore } from '../../store/Store';
import DataTable from '../common/DataTable';

export default observer(function Services() {
    const store = useStore().Services;

    useEffect( () => {
        if (!store.all) store.svcscan();
    }, [store.all]);

    if (store.loading) return <CircularProgress />

    return (
        <div>
            <h1>ProcessList</h1>
            <DataTable 
                data={store.all} 
                fields={['Order', 'Pid', 'Offset', 'Name', 'Display', 'State', 'Type', 'Start', 'Binary']} 
                keyField='Order'
                highlightRules={[
                    //{ match: p => p.Type === 'SERVICE_KERNEL_DRIVER', style: { backgroundColor: 'rgba(255, 0, 0, 0.5)' } },
                    { match: p => p.State === 'SERVICE_RUNNING', style: { backgroundColor: 'rgba(0, 255, 0, 0.1)' } }
                 ]}
            />
        </div>
    );
})