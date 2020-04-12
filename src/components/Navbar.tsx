import React from "react";

import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
