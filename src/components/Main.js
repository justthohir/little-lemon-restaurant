import React from "react";
import FoodImg from "../assets/images/food-hero.jpg";
import Button from "./Button";

const Main = () => {
  return (
    <main>
      <div className="hero width-100 bg-primary-green">
        <div className="container">
          <div className="row">
            <div className="col-2"></div>

            <div className="hero-content col-4">
              <h2 className="markazi-title color-primary-yellow m-0">
                Little Lemon
              </h2>
              <h4 className="markazi-subtitle color-sec-white m-0">Chicago</h4>
              <p className="karla-p color-sec-white">
                We are family owned Mediterranean restaurant, focus on
                traditional recipes serve with a modern twist.
              </p>
              <Button
                text="Reserve a Table"
                className="btn-hero-reserve bg-primary-yellow"
              />
            </div>

            <div className="col-4">
              <div className="hero-image">
                <img src={FoodImg} alt="Garlic Bread" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
