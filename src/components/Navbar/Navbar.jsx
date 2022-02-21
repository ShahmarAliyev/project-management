import React from "react";

import "./Navbar.css";
import Temple from "../../assets/temple.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="logo" />
          <span>The Rocket</span>
        </li>

        <li>
          <Link to="login"> Login</Link>
        </li>
        <li>
          <Link to="signup">Signup </Link>
        </li>

        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;