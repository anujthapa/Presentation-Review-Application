import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/presentation">Presentations</NavLink>
        </li>
        <li>
          <NavLink to="/addpresentation">Add Presentations</NavLink>
        </li>
      </ul>
    </div>
  );
}
