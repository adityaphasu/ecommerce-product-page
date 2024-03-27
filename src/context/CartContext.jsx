import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const values = {
    isCartOpen,
    setIsCartOpen,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export { CartContext, CartContextProvider };
