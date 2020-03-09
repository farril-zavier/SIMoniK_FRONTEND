import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import DaftarAkun from "./containers/Admin/DaftarAkun/DaftarAkun";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/daftarAkun" component={DaftarAkun} />
    </Switch>
);

export default Routes;
