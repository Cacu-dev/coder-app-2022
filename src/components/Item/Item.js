import React from "react";
import "./Item.css";

const Item = ({ title, description, price, pictureUrl }) => {
  return (
    <>
      <div className="card">
        <img src={pictureUrl} className="card__img" alt="foto" />
        <h1 className="card__title">{title}</h1>
        <p className="card__paragraph">{description}</p>
        <p>{price}</p>
        <button>Ver</button>
      </div>
    </>
  );
};

export default Item;
