import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../store/Store';
import DataTable from '../common/DataTable';
import { CircularProgress } from '@material-ui/core';
import { renderHex, renderLink } from '../common/CellRenderers';
import InfoBox from '../common/InfoBox';

export default observer(function Dlls({pid}) {
    const store = useStore().Dlls;

    useEffect( () => {
        if (!store.all) store.dlllist();
    }, [store.all]);

    if (store.loading) return <CircularProgress />
    if (!store.all) return <InfoBox>No DLLs loaded.</InfoBox>

    const data = pid ? store.all.filter(r => r.PID == pid) : store.all;

    return (
        <div>
            <DataTable
                title='DLLs'
                data={data}
                fields={['PID', 'Process', 'Base', 'Size', 'Name', 'Path']} 
                keyField={r => r.PID + r.Base}
                renderers={{
                    Process: (r, f) => renderLink('/processes/' + r.PID, r.Process),
                    PID: (r, f) => renderLink('/processes/' + r.PID, r.PID),
                    Base: renderHex
                }}
            />
        </div>
    );
})