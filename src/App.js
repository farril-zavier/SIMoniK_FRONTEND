import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Router from "./routes";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Sidebar />
                <Router />
            </React.Fragment>
        );
    }
}

export default App;
