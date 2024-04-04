import { useAnimation, motion } from "framer-motion";
import { Cart } from "../../assets/icons";
import { useCart } from "../../context/CartContext";
import { useEffect } from "react";

const CartButton = () => {
  const { cartItems, setIsCartOpen } = useCart();

  const controls = useAnimation();

  const handleClick = () => {
    setIsCartOpen((prev) => !prev);
  };

  useEffect(() => {
    controls.start({
      scale: [1, 1.5, 1],
      transition: { duration: 0.2 },
    });
  }, [cartItems, controls]);

  return (
    <button
      onClick={handleClick}
      className="relative grid size-10 place-items-center rounded ring-inset transition hover:ring-2 hover:ring-orange focus:ring-2 focus:ring-orange "
      aria-label="Cart">
      <img src={Cart} alt="" />
      {cartItems.length > 0 && (
        <motion.span
          animate={controls}
          aria-live="polite"
          className="absolute right-0.5 top-1 w-[1.3rem] rounded-lg bg-orange text-[0.6rem] font-bold text-white ">
          {cartItems}
        </motion.span>
      )}
    </button>
  );
};
export default CartButton;
