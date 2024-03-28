import { Cart } from "../../assets/icons";
import { useCart } from "../../context/CartContext";

const AddToCartButton = () => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={addToCart}
      className="flex items-center justify-center gap-4 rounded-xl bg-orange py-4 font-bold shadow-custom shadow-orange transition hover:bg-orange/70 hover:bg-white lg:flex-grow">
      <img
        src={Cart}
        alt=""
        className="group-hover:filtered-img size-[1.1rem] brightness-[5] transition-all"
      />
      <span className="text-[16px] text-white">Add to cart</span>
    </button>
  );
};
export default AddToCartButton;
