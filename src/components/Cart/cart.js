import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <>
      <h1>SOY EL CART</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <img src={item.pictureUrl} alt="foto" />
          />
        </div>
      ))}
      ;
    </>
  );
};

export default Cart;
