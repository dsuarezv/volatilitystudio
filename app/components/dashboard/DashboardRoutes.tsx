import React from 'react';
import { Switch, Route } from "react-router";
import ProcessList from '../process/ProcessList';
import DashBoard from './Dashboard';
import Dlls from '../dlls/Dlls';
import Drivers from '../drivers/Drivers';
import Malfind from '../malfind/Malfind';
import ServiceList from '../services/ServiceList';
import Vads from '../vads/Vads';
import Strings from '../strings/Strings';
import Files from '../files/Files';
import Registry from '../registry/Registry';
import Yara from '../yara/Yara';
import ProcessDetails from '../process/ProcessDetails';

export default function DashboardRoutes() {
    return (
        <Switch>
            <Route path='/yara' component={Yara} />
            <Route path='/malfind' component={Malfind} />
            <Route path='/services' component={ServiceList} />
            <Route path='/vads' component={Vads} />
            <Route path='/strings' component={Strings} />
            <Route path='/files' component={Files} />
            <Route path='/registry' component={Registry} />
            <Route path='/drivers' component={Drivers} />
            <Route path='/dlls' component={Dlls} />
            <Route path='/processes/:pid' component={ProcessDetails} />
            <Route path='/processes' component={ProcessList} />
            <Route path='/' component={DashBoard} />
        </Switch>
    )
}