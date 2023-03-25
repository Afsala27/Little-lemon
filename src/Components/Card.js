import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="card-back">
      <div className="card-container">
        <div className="image-container">
          <img src={imageSrc} alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <p className="des">{description}</p>
          </div>
        </div>
        <div className="btn">
          <button>Order Online</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
