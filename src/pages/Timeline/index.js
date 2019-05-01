import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";

import dogApi from "../../services/dogApi";

import socket from "socket.io-client";

import "./styles.css";
import "./loader.css";

import instadogramLogo from "../../assets/instadogram.png";
import bookmarkSolid from "../../assets/bookmark-solid.svg";

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
    let { dogs } = this.state;
    const dogsApi = await api.get("dogs");
    const response = await dogApi.get("images/search?limit=10");

    response.data.map(res => {
      dogs.push(res);
    });

    const filteredDogs = dogs.filter((dog, i) => {
      return dogs.indexOf(dog) === i;
    });

    await this.setState({ dogs: filteredDogs });

    dogsApi.data.map(data => this.loadDog(data));
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
    const io = socket(process.env.API_URL || "http://localhost:300");

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
          <div />
          <div className="logo">
            <img width={50} src={instadogramLogo} alt="InstaDogram" />
            <strong>Hello, {user}</strong>
          </div>
          <Link className="bookmarks" to="bookmark">
            <img width={20} src={bookmarkSolid} alt="bookmarkSolid" />
          </Link>
        </div>

        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadDogs}
          hasMore={true}
          loader={
            <div className="divLoader" key={0}>
              <div className="loader">
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          }
        >
          <ul className="dog-list">
            {dogs.map((dog, i) => (
              <Dog key={i} dog={dog} />
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    );
  }
}
