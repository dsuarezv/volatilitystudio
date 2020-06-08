import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { CircularProgress } from '@material-ui/core';
import { useStore } from '../../store/Store';
import DataTable from '../common/DataTable';

export default observer(function Malfind() {
    const store = useStore().Malfind;

    useEffect( () => {
        if (!store.all) store.malfind();
    }, [store.all]);

    if (store.loading) return <CircularProgress />

    
    return (
        <div>
            <h1>Malfind</h1>
            <DataTable 
                data={store.all} 
                fields={['Start VPN', 'End VPN', 'Size', 'PID', 'Process', 'Protection', 'CommitCharge', 'Tag']} 
                keyField='Start VPN'
                renderers={{
                    'Size': (r, f) => r['End VPN'] - r['Start VPN']
                }}
            />
        </div>
    );
})