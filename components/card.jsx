// components/Card.js
import React from "react";

function Card({ title, description, imageUrl }) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "5px",
    width: "300px",
    padding: "10px",
    marginBottom: "10px",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  return (
    <div style={cardStyle}>
      <img style={imageStyle} src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
