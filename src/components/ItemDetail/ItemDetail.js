import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState } from "react";

const ItemDetail = (data) => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Item Detail</h1>
      <div className="card__container">
        <div className="card__shoes">
          <img src={data.pictureUrl} className="card__img" alt="foto" />
        </div>
        <div className="card__description">
          <h1 className="card__title">{data.title}</h1>
          <p className="card__paragraph">{data.description}</p>
          <p>{data.price}</p>
          <ItemCount counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
