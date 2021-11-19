import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="about">
          <h1 className="about-title">About</h1>
          <p className="about-text">Who we are</p>
          <p className="about-text">Our Team</p>
          <p className="about-text">News</p>
          <p className="about-text">Contact Us</p>
        </div>
        <div className="about">
          <h1 className="about-title">Get Involved</h1>
          <p className="about-text">What we do</p>
          <p className="about-text">Trading Page</p>
          <p className="about-text">Our Services</p>
          <p className="about-text">Career</p>
        </div>
        <div className="about">
          <h1 className="about-title">Getting Help</h1>
          <p className="about-text">Search</p>
          <p className="about-text">Risk Assessment</p>
          <p className="about-text">FAQ</p>
        </div>
        <p className="about-copyright">
          Terms of Service + Privacy Policy II Copyright
        </p>
      </div>
    </div>
  );
}
