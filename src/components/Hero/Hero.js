import React from "react";
import "./Hero.scss";
import imageOne from "../../assets/images/image.jpg";
import heroImg from "../../assets/images/hero-img.png";
import imageTwo from "../../assets/images/image2.png";
import imageThree from "../../assets/images/image3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Hero() {
  return <div className="hero">{<img src={heroImg} alt="hero" />}</div>;
  /* <Carousel>
        <div>
          <img src={imageOne} alt="carousel 1" />
          <p className="legend"></p>
        </div>
        <div>
          <img src={imageTwo} alt="carousel 2" />
          <p className="legend"></p>
        </div>
        <div>
          <img src={imageThree} alt="carousel 3" />
          <p className="legend"></p>
        </div>
      </Carousel> */
}
