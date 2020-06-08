import React from 'react';
import { hot } from 'react-hot-loader/root';
import { MemoryRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';


type Props = {
};

const Root = ({  }: Props) => (
  <Router>
    <App>
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </App>
  </Router>
);

export default hot(Root);
