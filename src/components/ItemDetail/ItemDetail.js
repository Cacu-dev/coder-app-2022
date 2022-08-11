import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ data, id }) => {
  const product = data.filter((p) => p.id === +id);
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
            <ItemCount />
            <button>COMPRAR</button>
          </div>
        </div>
      ))}
    </>
  );
};
export default ItemDetail;
