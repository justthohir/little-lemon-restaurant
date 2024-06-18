import React, { forwardRef } from "react";

const NavBurger = forwardRef((props, ref) => {
  return (
    <nav>
      <ul ref={ref} className="burger-menu">
        <li className="burger-menu-item">
          <a href="Home" className="karla-sec-category color-sec-black">
            Home
          </a>
        </li>
        <li className="burger-menu-item">
          <a href="About" className="karla-sec-category color-sec-black">
            About
          </a>
        </li>
        <li className="burger-menu-item">
          <a href="Menu" className="karla-sec-category color-sec-black">
            Menu
          </a>
        </li>
        <li className="burger-menu-item">
          <a href="Reservations" className="karla-sec-category color-sec-black">
            Reservations
          </a>
        </li>
        <li className="burger-menu-item">
          <a href="order-online" className="karla-sec-category color-sec-black">
            Order Online
          </a>
        </li>
        <li className="burger-menu-item">
          <a href="login" className="karla-sec-category color-sec-black">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
});

export default NavBurger;
