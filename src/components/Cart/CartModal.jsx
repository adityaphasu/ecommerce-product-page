import { useCart } from "../../context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import CartItem from "./CartItem";

const CartModal = () => {
  const { cartItems } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="absolute top-[4.75rem] z-50 mx-2 flex min-h-64 w-[96%] flex-col rounded-lg bg-white shadow-cart md:right-20 md:w-[22.5rem] lg:top-24">
      <div className="border-b border-b-grayish-blue/40 px-6 py-[1.4rem]">
        <h2 className="font-bold">Cart</h2>
      </div>
      <div className="grid flex-grow">
        <AnimatePresence>
          {cartItems.length !== 0 ? (
            <div className="flex flex-col gap-6 px-6 py-[1.4rem]">
              <CartItem />

              <button className="w-full rounded-lg bg-orange py-[1.1rem] font-bold text-white transition hover:bg-white hover:text-orange hover:ring-2 hover:ring-orange">
                <span>Checkout</span>
              </button>
            </div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="self-center justify-self-center font-bold text-dark-grayish-blue">
              Your cart is empty.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
export default CartModal;
