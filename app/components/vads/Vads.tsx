import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../store/Store';
import DataTable from '../common/DataTable';
import { CircularProgress } from '@material-ui/core';
import { renderHex, renderLink } from '../common/CellRenderers';
import InfoBox from '../common/InfoBox';

export default observer(function Vads({pid}) {
    const store = useStore().Vads;

    useEffect( () => {
        if (!store.all) store.vadinfo();
    }, [store.all]);

    if (store.loading) return <CircularProgress />
    if (!store.all) return <InfoBox>No Vads loaded.</InfoBox>

    const data = pid ? store.all.filter(r => r.PID == pid) : store.all;

    return (
        <div>
            <h1>VADs</h1>
            <DataTable
                data={data}
                fields={['PID', 'Process', 'Offset', 'Start VPN', 'End VPN', 'Size', 'Tag', 'Protection', 'CommitCharge', 'PrivateMemory', 'Parent', 'File']} 
                keyField={r => r.PID + r['Start VPN']}
                renderers={{
                    Process: (r, f) => renderLink('/processes/' + r.PID, r.Process),
                    PID: (r, f) => renderLink('/processes/' + r.PID, r.PID),
                    Size: (r, f) => r['End VPN'] - r['Start VPN'],
                    Offset: renderHex,
                    'Start VPN': renderHex,
                    'End VPN': renderHex,
                }}
                highlightRules={[
                    { match: r => r.Protection === 'PAGE_EXECUTE_READWRITE', style: { backgroundColor: 'red' } }
                ]}
            />
        </div>
    );
})