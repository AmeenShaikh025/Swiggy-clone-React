import React, { Component } from "react";
import carouselImgOne from "../images/sw1.jpeg";
import carouselImgTwo from "../images/sw2.jpeg";

function Carouselhome() {
  return (
    <section className="carousel-container">
      <div className="carousel">
        <a href="/#">
          <img src={carouselImgOne} width="250px" height="250px" alt="item1" />
        </a>
        <a href="/#">
          <img src={carouselImgTwo} width="250px" height="250px" alt="item1" />
        </a>
        <a href="/#">
          <img src={carouselImgOne} width="250px" height="250px" alt="item1" />
        </a>
        <a href="/#">
          <img src={carouselImgTwo} width="250px" height="250px" alt="item1" />
        </a>
        <a href="/#">
          <img src={carouselImgOne} width="250px" height="250px" alt="item1" />
        </a>
        <a href="/#">
          <img src={carouselImgTwo} width="250px" height="250px" alt="item1" />
        </a>
      </div>
    </section>
  );
}

export default Carouselhome;
