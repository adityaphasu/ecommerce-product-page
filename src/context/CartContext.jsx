import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    if (quantity === 0) return;
    setCartItems([quantity]);
  };

  const deleteFromCart = () => {
    setCartItems([]);
  };

  const values = {
    isCartOpen,
    setIsCartOpen,
    quantity,
    setQuantity,
    cartItems,
    addToCart,
    deleteFromCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
