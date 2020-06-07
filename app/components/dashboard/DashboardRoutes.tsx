import React from 'react';
import { Switch, Route } from "react-router";
import ProcessList from '../process/ProcessList';
import DashBoard from './Dashboard';

export default function DashboardRoutes() {
    return (
        <Switch>
            <Route path='/processes' component={ProcessList} />
            <Route path='/' component={DashBoard} />
        </Switch>
    )
}