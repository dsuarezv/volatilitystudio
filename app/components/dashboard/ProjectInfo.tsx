import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../store/Store';
import DataField from '../common/DataField';
import { CircularProgress, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ProjectInfoDetails = observer(({ store }) => {
    if (store.loading) return <CircularProgress size={20} />;
    if (!store.all) return null;

    return (
        <div>
            {store.all.map((row, i) => <DataField key={i} name={row.Variable} value={row.Value} />)}
        </div>
    )
});



export default observer(function ProjectInfo() {
    const store = useStore().Project;

    useEffect( () => {
        if (!store.all) store.imageInfo();
    }, [store.all]);    

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <DataField name='Image' value={store.settings.image} />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <ProjectInfoDetails store={store} />
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
})