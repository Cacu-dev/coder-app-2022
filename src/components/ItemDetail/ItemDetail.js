import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  const product = data.slice(0, 1);
  return (
    <>
      <h1>Item Detail</h1>
      {product.map((p) => (
        <div className="card__container">
          <div className="card__shoes">
            <img src={p.pictureUrl} className="card__img" alt="foto" />
          </div>
          <div className="card__description">
            <h1 className="card__title">{p.title}</h1>
            <p className="card__paragraph">{p.description}</p>
            <p>{p.price}</p>
            <button>COMPRAR</button>
          </div>
        </div>
      ))}
    </>
  );
};
export default ItemDetail;
