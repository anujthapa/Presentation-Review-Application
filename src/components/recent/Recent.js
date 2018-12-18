import React, { Component } from "react";
import "./recent.css";
export default class Recent extends Component {
  render() {
    return (
      <div className="recent">
        {this.props.recentpresentation.map(item => {
          return (
            <div>
              <p>{item.presentatorname}</p>
              <p>{item.evaluatorname}</p>
              <p>{item.topic}</p>
              <p>{item.presentationdata}</p>
              <p>{item.url}</p>
              <p>{item.comments}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
