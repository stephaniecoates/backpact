import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import HikeDashboard from './components/Hikes/HikeDashboard';
import ChecklistDashboard from './components/Checklist/ChecklistDashboard';
import SetAlert from './components/SetAlert/SetAlert';
import HikerResources from './components/HikerResources/HikerResources';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/hikes' component={HikeDashboard}/>
        <Route path='/setalert' component={SetAlert}/>
        <Route path='/checklist' component={ChecklistDashboard}/>
        <Route path='/resources' component={HikerResources}/>
    </Switch>
)