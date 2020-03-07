import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import HomeDataEng from "./containers/DataEngineer/HomeDataEng/HomeDataEng";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="dataenghome" component={HomeDataEng}/>
    </Switch>

);

export default Routes;
