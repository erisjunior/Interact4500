import React, { Component } from "react";
import socket from "socket.io-client";

import "./styles.css";

import instadogramLogo from "../../assets/instadogram.png";
import arrow from "../../assets/arrow.svg";

import Dog from "../../components/Dog";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default class Timeline extends Component {
  state = {
    dogs: [],
    user: ""
  };

  async componentDidMount() {
    this.subscribeToEvents();
    await this.loadDogs();

    const user = await localStorage.getItem("@InstaDogram:username");
    await this.setState({ user });
  }

  loadDogs = async () => {
    const dogs = await api.get(
      `bookmarks/${localStorage.getItem("@InstaDogram:username")}`
    );

    await this.setState({ dogs: dogs.data });

    dogs.data.map(data => this.loadDog(data));
  };

  loadDog = async data => {
    let dog = data;
    if (dog.likeds) {
      const likes = dog.likeds.map(like => {
        if (like.user === localStorage.getItem("@InstaDogram:username")) {
          return like;
        }
      });
      let filtered = likes.filter(function(el) {
        return el != null;
      });
      if (filtered.length > 0) {
        dog.liked = true;
      }
    }
    if (dog.bookmarkeds) {
      const bookmarks = dog.bookmarkeds.map(bookmark => {
        if (bookmark.user === localStorage.getItem("@InstaDogram:username")) {
          return bookmark;
        }
      });
      let filtered = bookmarks.filter(function(el) {
        return el != null;
      });
      if (filtered.length > 0) {
        dog.bookmarked = true;
      }
    }
    await this.setState({
      dogs: this.state.dogs.map(index => (index.id === dog.id ? dog : index))
    });
  };

  subscribeToEvents = () => {
    const io = socket(process.env.REACT_APP_API_URL || "http://localhost:3000");

    io.on("like", data => this.loadDog(data));
    io.on("dislike", data => this.loadDog(data));
    io.on("bookmark", data => this.loadDog(data));
    io.on("unbookmark", data => this.loadDog(data));
  };

  render() {
    const { dogs, user } = this.state;

    return (
      <div className="timeline-wrapper">
        <div className="header">
          <Link className="arrow" to="timeline">
            <img width={20} src={arrow} alt="arrow" />
          </Link>
          <div className="logo">
            <img width={50} src={instadogramLogo} alt="InstaDogram" />
            <strong>Hello, {user}</strong>
          </div>
          <div />
        </div>
        {dogs.length < 1 && <p>Empty</p>}
        <ul className="dog-list">
          {dogs.map((dog, i) => (
            <Dog key={i} dog={dog} />
          ))}
        </ul>
      </div>
    );
  }
}
