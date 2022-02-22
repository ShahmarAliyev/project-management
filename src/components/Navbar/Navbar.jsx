import React from "react";
import { useLogout } from "../../hooks/useLogout";

import "./Navbar.css";
import Temple from "../../assets/temple.svg";
import { Link } from "react-router-dom";
function Navbar() {
  const { logout, isPending } = useLogout();

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
          {!isPending && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
          {isPending && <button className="btn">Logging out...</button>}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
