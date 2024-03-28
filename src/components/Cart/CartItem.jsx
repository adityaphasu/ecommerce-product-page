import { Delete } from "../../assets/icons";
import { thumbnails } from "../../constants";
import { useCart } from "../../context/CartContext";

const CartItem = () => {
  const { cartItems, deleteFromCart } = useCart();

  return (
    <div className="flex items-center justify-evenly gap-3.5">
      <img src={thumbnails[0]} alt="" className="size-[3.15rem] rounded-md" />
      <div className="flex-grow">
        <h3>Fall Limited Edition Sneakers</h3>
        <p className="flex gap-2.5">
          <span className="tracking-wide">$125.00 x {cartItems}</span>
          <strong className="text-very-dark-blue">${(125 * cartItems).toFixed(2)}</strong>
        </p>
      </div>
      <button
        onClick={deleteFromCart}
        className="flex size-5 max-w-full flex-shrink items-center justify-center"
        aria-label="Remove from cart">
        <img src={Delete} alt="" />
      </button>
    </div>
  );
};
export default CartItem;
