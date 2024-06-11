import React from "react";
import Nav from "./Nav";
import Logo from "../assets/images/Logo.svg";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo Little Lemon" />
      <Nav />
    </header>
  );
};

export default Header;
