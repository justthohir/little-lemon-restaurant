import React from "react";

const Nav = (props) => {
  return (
    <nav className="col-6">
      <ul className="menu">
        <li className="menu-item">
          <a href="Home" className="karla-sec-title color-sec-black fz-14">
            Home
          </a>
        </li>
        <li className="menu-item">
          <a href="About" className="karla-sec-title color-sec-black fz-14">
            About
          </a>
        </li>
        <li className="menu-item">
          <a href="Menu" className="karla-sec-title color-sec-black fz-14">
            Menu
          </a>
        </li>
        <li className="menu-item">
          <a
            href="Reservations"
            className="karla-sec-title color-sec-black fz-14"
          >
            Reservations
          </a>
        </li>
        <li className="menu-item">
          <a
            href="order-online"
            className="karla-sec-title color-sec-black fz-14"
          >
            Order Online
          </a>
        </li>
        <li className="menu-item">
          <a href="login" className="karla-sec-title color-sec-black fz-14">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
