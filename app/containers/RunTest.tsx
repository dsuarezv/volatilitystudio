import React from 'react';
import { withRouter } from 'react-router';
import styles from './RunTest.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStore } from '../store/Store';
import { observer } from 'mobx-react';

const RunTest = ({history}) => {
    const store = useStore();
    const list = store.Processes.all;

    return (
        <div>
            {/* <p>hola</p>
            <button onClick={() => { history.goBack(); }}>Back</button> */}
            <p>
                {store.Processes.loading ? 
                    <CircularProgress /> :
                    <button onClick={async () => await store.Processes.pslist()}>Execute</button>
                }
                {list ? <p className={styles.Output}>{ JSON.stringify(list) }</p> : null}
            </p>
        </div>
    )
}

export default withRouter(observer(RunTest));
