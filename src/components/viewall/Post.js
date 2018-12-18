import React from "react";
import "./presentation.css";
export default function Post(props) {
  return (
    <div className="post">
      <p>{props.item.presentatorname}</p>
      <p>{props.item.evaluatorname}</p>
      <p>{props.item.topic}</p>
      <p>{props.item.presentationdata}</p>
      <button className="green">View</button>
      <button className="yellow">Edit</button>
      <button className="red">Delete</button>
    </div>
  );
}
