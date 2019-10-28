import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";
import { NotFound } from '../Layouts';
import { Dashboard, ViewJob, AppliedJobs } from '../Scenes'



 export default class NestedRoutes extends Component{
    
     render(){
        return(
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/job/:id' component={ViewJob} />
                <Route exact path='/myJobs' component={AppliedJobs} />
                <Route path="*" component = {NotFound} />
            </Switch>
        );
     };
      
 }