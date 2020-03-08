import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import StockOpname from "./containers/DataEngineer/StockOpname/StockOpname";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="stock" component={StockOpname}/>
    </Switch>

);

export default Routes;
