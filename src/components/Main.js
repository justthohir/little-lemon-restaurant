import React, { useEffect } from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimoni from "./Testimoni";
import About from "./About";

const Main = () => {

  useEffect(() => {
    // console.log(menuList[1]);
  });

  return (
    <main>
      <Hero />
      
      <Specials />

      <Testimoni />

      <About />
      
    </main>
  );
};

export default Main;
