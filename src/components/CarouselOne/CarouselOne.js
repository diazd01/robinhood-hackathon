import React from "react";
import "./CarouselOne.scss";
import imageOne from "../../assets/images/image.jpg";
import heroImg from "../../assets/images/hero-img.png";
import imageTwo from "../../assets/images/image2.png";
import imageThree from "../../assets/images/image3.png";
import BannerOne from "../BannerOne/BannerOne.scss";
import rectangle429 from "../../assets/images/rectangle_429.png";
import rectangle430 from "../../assets/images/Rectangle_430.png";
import { Carousel } from "react-responsive-carousel";

export default function CarouselOne() {
  return (
    <div className="carousel-one">
      <div className="carousel-titles__container">
        <h1 className="carousel-title">
          Guides to Getting Started with Crypto
        </h1>
        <p className="carousel-text">
          Videos curated by Robinhood's leading cryptocurrency experts, to get
          you started on a sure path
        </p>
      </div>
      <Carousel className="carousel-one__carousel">
        <div className="carousel-one__card">
          <div className="carousel-one__card-title-container">
            <h1 className="carousel-one__card-title">Crypto Basics</h1>
            <p className="carousel-one__card-text">
              Get started with the need-to-knows, let by Melissa Gustavo.
            </p>
          </div>

          <div className="carousel-one__card-subtitle-container">
            <img
              src={rectangle429}
              alt="card figures"
              className="carousel-one__card-image"
            />
          </div>
        </div>
        <div className="carousel-one__card">
          <div className="carousel-one__card-title-container">
            <h1 className="carousel-one__card-title">Risk Assessment</h1>
            <p className="carousel-one__card-text">
              Clean & Calculated expertise with our very own Natalie Miller.
            </p>
          </div>

          <div className="carousel-one__card-subtitle-container">
            <img
              src={rectangle430}
              alt="card figures"
              className="carousel-one__card-image"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
