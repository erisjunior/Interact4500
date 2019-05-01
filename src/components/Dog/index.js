import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";
import like from "../../assets/like.svg";
import likeSolid from "../../assets/like-solid.svg";
import bookmark from "../../assets/bookmark.svg";
import bookmarkSolid from "../../assets/bookmark-solid.svg";
import comment from "../../assets/comment.svg";

export default class Dog extends Component {
  handleLike = async () => {
    const { id } = this.props.dog;
    const user = localStorage.getItem("@InstaDogram:username");

    await api.post(`likes/`, { id, user });
  };

  handleBookmark = async () => {
    const { id } = this.props.dog;
    const user = localStorage.getItem("@InstaDogram:username");

    await api.post(`bookmarks/`, { id, user });
  };

  render() {
    const { dog } = this.props;

    return (
      <li className="dog">
        <div className="divImg">
          <img src={dog.url} alt={dog.id} />
        </div>
        <div className="footer">
          <div className="init">
            <button type="button" onClick={this.handleLike}>
              {dog.liked ? (
                <img src={likeSolid} alt="likeSolid" />
              ) : (
                <img src={like} alt="like" disabled />
              )}
              {dog.likes}
            </button>
            <button type="button" onClick={this.handleLike}>
              <img src={comment} alt="comment" />
            </button>
          </div>
          <button type="button" onClick={this.handleBookmark}>
            {dog.bookmarked ? (
              <img
                src={bookmarkSolid}
                className="bookmark"
                alt="bookmarkSolid"
                disabled
              />
            ) : (
              <img src={bookmark} className="bookmark" alt="bookmark" />
            )}
          </button>
        </div>
        {dog.likes}
      </li>
    );
  }
}
