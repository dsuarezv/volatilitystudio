import React from 'react';
import { observer } from 'mobx-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export default withRouter(observer(function ProcessDetails(p) {
    const pid = p.match.params.pid;

    return (
        <div>
            <h1>ProcessDetails ({pid})</h1>
        </div>
    );
}))