import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import UnggahSO from "./containers/FieldOfficer/UnggahSO/UnggahSO";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/unggah-so" component={UnggahSO} />
    </Switch>
);

export default Routes;
