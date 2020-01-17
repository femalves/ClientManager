import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Nome não pode estar em branco." } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email não pode estar em branco." } });
      return;
    }

    if (phone === "") {
      this.setState({
        errors: { phone: "Telefone não pode estar em branco." }
      });
      return;
    }

    const updContact = {
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updContact
    );

    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: ""
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Atualizar Contato</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Nome"
                    name="name"
                    placeholder="Digite o nome"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Digite o Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Telefone"
                    name="phone"
                    placeholder="Digite o telefone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    className="btn btn-light btn-block"
                    type="submit"
                    value="Atualizar Contato"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
