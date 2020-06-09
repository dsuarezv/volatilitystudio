import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { CircularProgress } from '@material-ui/core';
import { useStore } from '../../store/Store';
import DataTable from '../common/DataTable';
import { renderHex, renderLink } from '../common/CellRenderers';

export default observer(function Malfind() {
    const store = useStore().Malfind;

    useEffect( () => {
        if (!store.all) store.malfind();
    }, [store.all]);

    if (store.loading) return <CircularProgress />

    
    return (
        <div>
            <DataTable 
                title='Malfind'
                data={store.all} 
                fields={['Start VPN', 'End VPN', 'Size', 'PID', 'Process', 'Protection', 'CommitCharge', 'Tag']} 
                keyField='Start VPN'
                renderers={{
                    'Start VPN': renderHex,
                    'End VPN': renderHex,
                    Size: (r, f) => r['End VPN'] - r['Start VPN'],
                    PID: (r, f) => renderLink('/processes/' + r.PID, r.PID),
                    Process: (r, f) => renderLink('/processes/' + r.PID, r.Process),
                }}
            />
        </div>
    );
})