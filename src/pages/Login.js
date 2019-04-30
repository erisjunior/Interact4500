import React, { Component } from "react";

import instadogramLogo from "../assets/instadogram.png";
import "./Login.css";

export default class Login extends Component {
  state = {
    username: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem("@GoTwitter:username", username);

    this.props.history.push("/timeline");
  };

  handleInputChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  render() {
    return (
      <div className="login-wrapper">
        <img src={instadogramLogo} alt="InstaDogram" />
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Nome de Usuário"
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
