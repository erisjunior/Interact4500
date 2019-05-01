import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";
import like from "../../assets/like.svg";

export default class Dog extends Component {
  handleLike = async () => {
    const { id } = this.props.dog;

    await api.post(`likes/${id}`);
  };

  render() {
    const { dog } = this.props;

    return (
      <li className="dog">
        <div className="divImg">
          <img src={dog.url} alt={dog.id} />
        </div>
        <button type="button" onClick={this.handleLike}>
          <img src={like} alt="like" />
          {/* {tweet.likes} */}
        </button>
      </li>
    );
  }
}
