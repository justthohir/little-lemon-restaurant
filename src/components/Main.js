import React, { useEffect } from "react";
import Button from "./Button";
import MenuCard from "./MenuCard";
import TestimoniCard from "./TestimoniCard";

import FoodImg from "../assets/images/food-hero.jpg";
import bruchetta from "../assets/images/bruchetta.svg";
import salad from "../assets/images/salad.jpg";
import lemon from "../assets/images/lemon.jpg";
import emily from "../assets/images/emily.jpg";
import james from "../assets/images/james.jpg";
import sophia from "../assets/images/sophia.webp";

const Main = () => {
  const menuList = [
    {
      src: salad,
      alt: "Greek Salad Menu",
      title: "Greek Salad",
      price: "$12.99",
      desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      src: bruchetta,
      alt: "Bruchetta Menu",
      title: "Bruchetta",
      price: "$5.99",
      desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      src: lemon,
      alt: "Lemon Desert Menu",
      title: "Lemon Desert",
      price: "$5.00",
      desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  const testimoniList = [
    {
      src: emily,
      name: "Emily Thompson",
      words:
        "This restaurant is nice and delicious. The service is great, website have a reserve table feature, thats make us easy to reserve.",
    },
    {
      src: james,
      name: "James Rodrigues",
      words:
        "Absolutely loved my experience at Little Lemon. The ambiance is cozy, and the Mediterranean dishes are to die for. Booking online was a breeze.",
    },
    {
      src: sophia,
      name: "Sophia Latjuba",
      words:
        "The best Mediterranean cuisine I've had in a long time. Little Lemon's online reservation system is fantastic. A must-visit for food lovers!",
    },
  ];

  useEffect(() => {
    // console.log(menuList[1]);
  });

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
            <h1 className="markazi-subtitle color-sec-black m-0">
              This weeks specials!
            </h1>
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
                {menuList.map((menu, iMenu) => {
                  return <MenuCard {...menu} key={iMenu} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero testimoni bg-primary-green width-100">
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 tesmoni-title">
              <h1 className="karla-p fz-16 m-0 color-sec-white">
                Testimonials
              </h1>
              <h1 className="markazi-subtitle m-0 color-primary-yellow">
                We Care About Our Customers Too
              </h1>
            </div>
            <div className="col-2"></div>
          </div>

          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="container-card">
                <div className="row">
                  {testimoniList.map((testimoni, iTesti) => {
                    return <TestimoniCard {...testimoni} key={iTesti} />;
                  })}
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
