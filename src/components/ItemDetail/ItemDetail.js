import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = (data) => {
  const [counter, setCounter] = useState(0);
  const [mostrarItemCount, setMostrarItemcount] = useState(true);
  const { addToCart } = useContext(CartContext);

  const onAddCar = () => {
    setMostrarItemcount(false);
  };

  const checkout = () => {
    addToCart(data, counter);
  };
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

          <div>
            <h1>testeando</h1>
            <button
              onClick={onAddCar}
              className="counterContainer__btn-comprar"
            >
              Agregar al carrito
            </button>
            {mostrarItemCount ? (
              <ItemCount counter={counter} setCounter={setCounter} />
            ) : (
              <Link to={`/cart`}>
                <button
                  onClick={checkout}
                  className="counterContainer__btn-comprar"
                >
                  Finalizar compra
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
