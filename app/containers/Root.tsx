import React from 'react';
import { hot } from 'react-hot-loader/root';
import Routes from '../Routes';
import { MemoryRouter as Router } from 'react-router-dom';


type Props = {
};

const Root = ({  }: Props) => (
  <Router>
    <Routes />
  </Router>
);

export default hot(Root);
