import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header-back">
        <div className="title-set">
          <h1> The little lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reservation">
            <button className="primary-button">Reserverve table</button>
          </Link>
        </div>
        <div className="home-image-section">
          <img className="image" src="restauranfood.jpg" alt="restuarent"></img>
        </div>
      </div>
    </>
  );
}
