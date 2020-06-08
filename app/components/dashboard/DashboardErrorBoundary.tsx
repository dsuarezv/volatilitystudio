import React, { Component, Fragment } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';


class DashboardErrorBoundary extends Component {

    state = { 
        hasError: false,
        error: null
    };

    static getDerivedStateFromError(error) {
        return { hasError: true, error: error };
    }

    componentDidCatch(error, errorInfo) {

    }

    render() {
        if (this.state.hasError) {
            console.dir(this.state.error);

            return (
                <Fragment>
                    <h1>Something went wrong.</h1>
                    <ExpansionPanel title="">
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Error: {this.state.error.message}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            {this.state.error.stack}
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <p>You may try to reload the page. If the error persists, please contact Support regarding this issue.</p>
                </Fragment>
            );
        }

        return this.props.children;
    }
}

export default DashboardErrorBoundary;