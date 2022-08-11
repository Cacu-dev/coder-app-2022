import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <>
      <div className="card">
        <img src={pictureUrl} className="card__img" alt="foto" />
        <h1 className="card__title">{title}</h1>
        <p className="card__paragraph">{description}</p>
        <p>{price}</p>
        <Link to={`/item-detail-container/${id}`}>
          <button>Ver Detalle</button>
        </Link>
      </div>
    </>
  );
};

export default Item;
