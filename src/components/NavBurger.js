import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";

const NavBurger = forwardRef((props, ref) => {
  return (
    <nav>
      <ul ref={ref} className="burger-menu">
        <li className="burger-menu-item">
          <NavLink to="/" className="karla-sec-category color-sec-black">
            Home
          </NavLink>
        </li>
        <li className="burger-menu-item">
          <NavLink
            to="/booking"
            className="karla-sec-category color-sec-black"
          >
            Booking
          </NavLink>
        </li>
        <li className="burger-menu-item">
          <NavLink to="/" className="karla-sec-category color-sec-black">
            Order Online
          </NavLink>
        </li>
        <li className="burger-menu-item">
          <NavLink to="/" className="karla-sec-category color-sec-black">
            About
          </NavLink>
        </li>
        <li className="burger-menu-item">
          <NavLink to="/" className="karla-sec-category color-sec-black">
            Contact Us
          </NavLink>
        </li>
        <li className="burger-menu-item">
          <NavLink to="/" className="karla-sec-category color-sec-black">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
});

export default NavBurger;
