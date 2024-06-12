import React from "react";

const Nav = (props) => {
  return (
    <nav className="col-6">
      <ul className="menu">
        <li className="menu-item">
          <a href="Home">Home</a>
        </li>
        <li className="menu-item">
          <a href="About">About</a>
        </li>
        <li className="menu-item">
          <a href="Menu">Menu</a>
        </li>
        <li className="menu-item">
          <a href="Reservations">Reservations</a>
        </li>
        <li className="menu-item">
          <a href="order-online">Order Online</a>
        </li>
        <li className="menu-item">
          <a href="login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
