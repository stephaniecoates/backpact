import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import HikeDashboard from './components/Hikes/HikeDashboard';
import GearDashboard from './components/Gear/GearDashboard';
import SetAlert from './components/SetAlert/SetAlert';
import FinalChecklist from './components/FinalChecklist/FinalChecklist';
import HikerResources from './components/HikerResources/HikerResources';

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/home' component={Home}/>
        <Route path='/hikes' component={HikeDashboard}/>
        <Route path='/gear' component={GearDashboard}/>
        <Route path='/setalert' component={SetAlert}/>
        <Route path='/finalchecklist' component={FinalChecklist}/>
        <Route path='/resources' component={HikerResources}/>
    </Switch>
)