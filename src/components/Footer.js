import React from "react";
import Logo from "../assets/images/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img src={Logo} alt="Little Lemon Logo" />
      </div>

      <div className="footer-container">
        <h3>Navigation</h3>
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="Menu">Menu</a>
          </li>
          <li>
            <a href="Reservations">Reservations</a>
          </li>
          <li>
            <a href="order-online">Order Online</a>
          </li>
          <li>
            <a href="login">Login</a>
          </li>
        </ul>
      </div>

      <div className="footer-container">
        <h3>Support</h3>
        <ul>
          <li>
            <a href="contact-us">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="footer-container">
        <h3>Social Media</h3>
        <ul>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
