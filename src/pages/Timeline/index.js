import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";

import dogApi from "../../services/dogApi";

import socket from "socket.io-client";

import "./styles.css";
import "./loader.css";

import instadogramLogo from "../../assets/instadogram.png";
import bookmarkSolid from "../../assets/bookmark-solid.svg";

import Dog from "../../components/Dog";

export default class Timeline extends Component {
  state = {
    dogs: [],
    user: ""
  };

  async componentDidMount() {
    this.subscribeToEvents();

    const response = await dogApi.get("images/search?limit=10");
    const user = await localStorage.getItem("@InstaDogram:username");

    this.setState({ dogs: response.data, user });
  }

  subscribeToEvents = () => {
    const io = socket("http://localhost:3000");

    io.on("like", data => {
      console.log(data);
      // this.setState({
      //   dogs: this.state.dogs.map(dog => (dog.id === data.id ? data : dog))
      // });
    });
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
          <img
            className="bookmarks"
            width={20}
            src={bookmarkSolid}
            alt="bookmarkSolid"
          />
        </div>

        <InfiniteScroll
          pageStart={0}
          loadMore={async () => {
            const { dogs } = this.state;
            const response = await dogApi.get("images/search?limit=5");
            response.data.map(res => {
              dogs.push(res);
            });
            this.setState({ dogs });
          }}
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
            {dogs.map(dog => (
              <Dog key={dog.id} dog={dog} />
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    );
  }
}
