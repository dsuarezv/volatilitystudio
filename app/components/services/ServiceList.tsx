import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { CircularProgress } from '@material-ui/core';
import { useStore } from '../../store/Store';
import DataTable from '../common/DataTable';
import { renderLink, renderHex } from '../common/CellRenderers';

export default observer(function Services() {
    const store = useStore().Services;

    useEffect( () => {
        if (!store.all) store.svcscan();
    }, [store.all]);

    if (store.loading) return <CircularProgress />

    return (
        <div>
            <DataTable 
                title='Services'
                data={store.all} 
                fields={['Order', 'Pid', 'Offset', 'Name', 'Display', 'State', 'Type', 'Start', 'Binary']} 
                keyField='Order'
                renderers={{
                    Pid: (r, f) => ((r.Pid) ? renderLink('/processes/' + r.Pid, r.Pid) : null),
                    Offset: renderHex
                }}
                highlightRules={[
                    //{ match: p => p.Type === 'SERVICE_KERNEL_DRIVER', style: { backgroundColor: 'rgba(255, 0, 0, 0.5)' } },
                    { match: p => p.State === 'SERVICE_RUNNING', style: { backgroundColor: 'rgba(0, 255, 0, 0.1)' } }
                 ]}
            />
        </div>
    );
})