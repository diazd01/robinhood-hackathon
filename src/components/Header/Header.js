import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div>
      <nav className="nav">
        <div className="nav__logo-container">
          <h2 className="nav__link-logo">Robinhood</h2>
        </div>

        <ul className="nav__list">
          <li className="nav__list-item">Products </li>
          <li className="nav__list-item">Learn</li>
          <li className="nav__list-item">Support</li>
          <li className="nav__list-item">Who We Are</li>
          <li className="nav__list-item--login">Login</li>
          <button className="nav__list-item--button">Sign Up</button>
        </ul>
      </nav>
    </div>
  );
}
