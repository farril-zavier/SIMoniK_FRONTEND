import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import StockOpname from "./containers/DataEngineer/StockOpname/StockOpname";
import DaftarAkun from "./containers/Admin/DaftarAkun/DaftarAkun";
import Produk from "./containers/DataEngineer/Produk/Produk";
import TambahProduk from "./containers/DataEngineer/Produk/TambahProduk";
import DetailProduk from "./containers/DataEngineer/Produk/DetailProduk";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stock" component={StockOpname} />
        <Route exact path="/produk" component={Produk} />
        <Route exact path="/produk/tambah" component={TambahProduk} />
        <Route exact path="/produk/detail" component={DetailProduk} />
        <Route exact path="/daftarAkun" component={DaftarAkun} />
    </Switch>
);

export default Routes;
