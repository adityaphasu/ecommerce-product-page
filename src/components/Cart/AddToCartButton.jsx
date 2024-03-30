import { Cart } from "../../assets/icons";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";

const AddToCartButton = () => {
  const { addToCart } = useCart();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={addToCart}
      className="flex items-center justify-center gap-4 rounded-xl bg-orange py-4 font-bold shadow-custom shadow-orange transition-colors hover:bg-orange/70 lg:flex-grow">
      <img src={Cart} alt="" className="size-[1.1rem] brightness-[5] transition-all" />
      <span className="text-[16px] text-white">Add to cart</span>
    </motion.button>
  );
};
export default AddToCartButton;
