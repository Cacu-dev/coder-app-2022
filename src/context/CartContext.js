import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //>>Aspectos a incluir en el entregable:
  //Al clickear comprar en ItemDetail se debe guardar en el CartContext el producto y
  //su cantidad en forma de objeto { name, price, quantity, etc. } dentro del array de productos agregados
  //Detalle importante: CartContext debe tener la lógica incorporada de no aceptar duplicados y mantener su consistencia.
  //Métodos recomendados:
  //addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
  //removeItem(itemId) // Remover un item del cart por usando su id
  //clear() // Remover todos los items
  //isInCart: (id) => true|false

  const addToCart = (data, quantity) => {
    setCart(cart.push({ ...data, quantity }));
    console.log("🎅🎅🎅", cart);
  };
  const removeProductCart = (data) => {
    setCart(...cart.filter((product) => product.id !== data.id));
  };
  const clearCart = (data, quantity) => {
    setCart(cart.push({ ...data, quantity }));
  };
  const isInCart = (id) => {
    "true|false";
  };

  const value = { cart, setCart, addToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
