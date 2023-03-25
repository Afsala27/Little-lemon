import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="left-footer">
          <img src="logo footer.png" alt="Logo" height="50px" />
          <p className="link">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div className="center-footer">
          <h2>Contact</h2>
          <p className="link">
            Via Rossini 10, 10136 T Chigaco
            <br />
            <Link to="#">
              <p className="link">Phone: 1234567890</p>
            </Link>
            <Link to="#">
              <p className="link">Email: hello@gmail.com</p>
            </Link>
          </p>
        </div>

        <div className="right-footer">
          <h2>Links</h2>

          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/about">
            <p className="link">About</p>
          </Link>
          <Link to="/menu">
            <p className="link">Menu</p>
          </Link>
        </div>
        <div className="last-footer">
          <Link to="/reservation">
            <p className="link">Reservation</p>
          </Link>
          <Link to="/orderonline">
            <p className="link">Order Online</p>
          </Link>
          <Link to="/login">
            <p className="link">Login</p>
          </Link>
        </div>
      </footer>
    </>
  );
}
