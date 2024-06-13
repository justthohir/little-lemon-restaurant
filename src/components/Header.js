import React from "react";
import Nav from "./Nav";
import Logo from "../assets/images/Logo.svg";

const Header = () => {
  return (
    <header className="container my-2">
      <div className="row">
        <div className="col-2"></div>

        <div className="col-2 logo">
          <img src={Logo} alt="Logo Little Lemon" />
        </div>

        <Nav classNav="col-6" />

        <div className="col-2"></div>
      </div>
    </header>
  );
};

export default Header;
