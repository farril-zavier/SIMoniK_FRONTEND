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

        {/* DataEngineer */}
        <Route path="/stock" component={StockOpname} />
        <Route path="/produk" component={Produk} />
        <Route path="/produk/tambah" component={TambahProduk} />
        <Route path="/produk/detail" component={DetailProduk} />

        {/* Admin */}
        <Route path="/daftarAkun" component={DaftarAkun} />
    </Switch>
);

export default Routes;
