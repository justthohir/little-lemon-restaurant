import React from "react";
import Button from "./Button";

import FoodImg from "../assets/images/food-hero.jpg";
import bruchetta from "../assets/images/bruchetta.svg";
import salad from "../assets/images/salad.jpg";
import lemon from "../assets/images/lemon.jpg";

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
                className="btn-hero-reserve karla-sec-category fz-14 bg-primary-yellow"
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

      <div className="container highlight mt-7">
        <div className="row">
          <div className="col-2"></div>

          <div className="col-4">
            <h1 className="markazi-subtitle color-sec-black m-0">This weeks specials!</h1>
          </div>

          <div className="col-2"></div>
          
          <div className="col-2 highlight-button">
            <Button
              text="Online Menu"
              className="btn-online-menu karla-sec-category fz-14 bg-primary-yellow"
            />
          </div>
          
          <div className="col-2"></div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="container-card">
              <div className="row">

                <div className="card col-1 bg-sec-white">
                  <div className="card-image">
                    <img src={salad} alt="Greek Salad Menu" />
                  </div>
                </div>

                <div className="card col-1 bg-sec-white">
                  <div className="card-image">
                    <img src={bruchetta} alt="Bruchetta Menu" />
                  </div>
                </div>
                
                <div className="card col-1 bg-sec-white">
                  <div className="card-image">
                    <img src={lemon} alt="Lemon Dessert Menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
