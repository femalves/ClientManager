import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Lista de contatos" />
        <div className="container">
          <h1> Clientes </h1>
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
