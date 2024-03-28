import { Cart } from "../../assets/icons";
import { useCart } from "../../context/CartContext";

const CartButton = () => {
  const { cartItems, quantity, setIsCartOpen } = useCart();

  const handleClick = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <button
      onClick={handleClick}
      className="relative grid size-10 place-items-center rounded ring-inset transition hover:ring-2 hover:ring-orange focus:ring-2 focus:ring-orange "
      aria-label="Cart">
      <img src={Cart} alt="" />
      {cartItems.length > 0 && (
        <span className="absolute right-0.5 top-1 w-[1.3rem] rounded-lg bg-orange text-[0.6rem] font-bold text-white ">
          {quantity}
        </span>
      )}
    </button>
  );
};
export default CartButton;
