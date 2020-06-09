import React, { useEffect } from 'react';
import { useStore } from '../../store/Store';
import { CircularProgress } from '@material-ui/core';
import DataTable from '../common/DataTable';
import { observer } from 'mobx-react';
import { renderLink, renderHex } from '../common/CellRenderers';


export default observer(function ProcessList() {
    const store = useStore().Processes;

    useEffect( () => {
        if (!store.all) store.pslist();
    }, [store.all]);

    if (store.loading) return <CircularProgress />

    return (
        <div>
            <DataTable 
                title='Process list'
                data={store.all} 
                fields={['PID', 'PPID', 'ImageFileName', 'Offset(V)', 'Threads', 'Handles', 'SessionId', 'CreateTime', 'ExitTime']} 
                keyField='PID'
                renderers={{
                    ImageFileName: (r, f) => renderLink('/processes/' + r.PID, r.ImageFileName),
                    'Offset(V)': renderHex
                }}
                highlightRules={[
                     { match: p => p.ImageFileName === 'System', style: { fontWeight: 'bold' } }, 
                //     { match: p => p.ImageFileName === 'lsass.exe', style: { backgroundColor: 'pink' } }, 
                ]}
            />
        </div>
    );
})