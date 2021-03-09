import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { AddEmployee } from './components/add.employee';
import Navbar from './components/navbar';
import LogIn from './components/login'

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
      {/* {location.path !== '/' ? <Route path="/" exact={true} component={LogIn} /> : <Navbar/>} */}
        {/* <Navbar /> */}
        <Route path="/" exact={true} component={LogIn} /> 
          <Route path="/addemployee" component={AddEmployee} />
          <Route path="/nav" component={Navbar} />
        </Switch>
      </div>
    </BrowserRouter>
  )

}