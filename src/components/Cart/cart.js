import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((acc, el) => acc + +el.price, 0);
  console.log(total);
  return (
    <>
      <h1>SOY EL CART</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <img src={item.pictureUrl} alt="foto" />
        </div>
      ))}
      <p className="total">TOTAL: {total}</p>
    </>
  );
};

export default Cart;
