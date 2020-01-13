import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Contact extends Component {
  render() {
    const { nome, email, telefone } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>Nome: {nome}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Telefone: {telefone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  telefone: PropTypes.string.isRequired
};
