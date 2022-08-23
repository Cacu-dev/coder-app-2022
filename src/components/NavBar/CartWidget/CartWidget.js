import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartContext } from "../../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="cart">
      <ShoppingCartOutlinedIcon />
      {cart.length > 0 && <div className="cart__quantity">{cart.length}</div>}
    </div>
  );
};

export default CartWidget;
