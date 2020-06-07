import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import RunTest from './containers/RunTest';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.RUN_TEST} component={RunTest} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
