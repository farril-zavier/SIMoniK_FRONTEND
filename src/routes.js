import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import UnggahSO from "./containers/FieldOfficer/UnggahSO/UnggahSO";
import StockOpname from "./containers/DataEngineer/StockOpname/StockOpname";
import DaftarAkun from "./containers/Admin/DaftarAkun/DaftarAkun";
import Produk from "./containers/DataEngineer/Produk/Produk";
import TambahProduk from "./containers/DataEngineer/Produk/TambahProduk";
import DetailProduk from "./containers/DataEngineer/Produk/DetailProduk";
import BuatAkun from "./containers/Admin/BuatAkun/BuatAkun";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/unggah-so" component={UnggahSO} />

        {/* DataEngineer */}
        <Route exact path="/stock" component={StockOpname} />
        <Route exact path="/produk" component={Produk} />
        <Route exact path="/produk/tambah" component={TambahProduk} />
        <Route exact path="/produk/detail" component={DetailProduk} />

        {/* Admin */}
        <Route exact path="/daftar-akun" component={DaftarAkun} />
        <Route exact path="/buat-akun" component={BuatAkun} />
    </Switch>
);

export default Routes;
