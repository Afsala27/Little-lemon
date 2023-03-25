import React from "react";
import { Link } from "react-router-dom";

export default function Confirmedbooking() {
  return (
    <section>
      <div className="layout">
        <h1>We got you!</h1>
        <p>
          Your table has been booked sucssesfully. Now please head to our Menu
          section to explore new variety of foods. Also be sure to reach on time
          in our restaurant.
        </p>
        <Link to="/">
          <button className="primary-button">Back to Menu</button>
        </Link>
      </div>
    </section>
  );
}
