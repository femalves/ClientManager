import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";

import { Provider } from "./context";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Lista de contatos" />
          <div className="container">
            <h1> Clientes </h1>
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
