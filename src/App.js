import React, { Component } from "react";
import Contact from "./components/Contact";
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
          <Contact
            nome="Jane Doe"
            email="janedoe@gmail.com"
            telefone="(11) 2222-2222"
          />
        </div>
      </div>
    );
  }
}

export default App;
