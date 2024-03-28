import { Minus, Plus } from "../../assets/icons";
import { useCart } from "../../context/CartContext";
import QuantityButton from "./QuantityButton";

const QuantitySelector = () => {
  const { quantity, setQuantity } = useCart();

  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (quantity <= 0) return;
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="mt-0.5 flex justify-between overflow-hidden rounded-lg bg-light-grayish-blue font-bold lg:flex-row">
      <QuantityButton icon={Minus} onClick={handleMinus} />
      <span className="flex items-center justify-center lg:w-[4.2rem]">{quantity}</span>
      <QuantityButton icon={Plus} onClick={handlePlus} />
    </div>
  );
};
export default QuantitySelector;
