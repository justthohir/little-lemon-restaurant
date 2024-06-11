import React from "react";
import Logo from "../assets/Logo.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img src={Logo} />
      </div>

      <div className="footer-container">
        <h3>Navigation</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>

      <div className="footer-container">
        <h3>Support</h3>
        <ul>
          <li><a href="#">Contact Us</a></li> 
        </ul>
      </div>

      <div className="footer-container">
      <h3>Social Media</h3>
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
