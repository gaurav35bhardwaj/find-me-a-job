import React from 'react';
import {  Route, Switch } from "react-router-dom";
import { NotFound, MainLayout } from '../Layouts'


 const MainRoutes = (props) => {
  return(
    <Switch>
      <Route path="/" component={MainLayout} /> 
      <Route path="*" component = {NotFound} />
    </Switch>
  );
    
    
 }
export default MainRoutes;
