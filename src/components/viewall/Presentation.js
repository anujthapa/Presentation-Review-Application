import React, { Component } from "react";
import Post from "./Post";

export default class Presentation extends Component {
  render() {
    const presentation = this.props.presentation;
    return (
      <div className="presentation">
        <div className="post">
          <h4>Presentatorname</h4>
          <h4>Evaluatorname</h4>
          <h4>Topic</h4>
          <h4>Date</h4>
          <h4 />
          <h4 />
          <h4 />
        </div>
        {presentation.map(item => {
          return <Post item={item} />;
        })}
      </div>
    );
  }
}
