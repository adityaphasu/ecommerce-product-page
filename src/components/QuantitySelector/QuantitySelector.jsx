import { Minus, Plus } from "../../assets/icons";
import QuantityButton from "./QuantityButton";

const QuantitySelector = () => {
  return (
    <div className="mt-0.5 flex justify-between overflow-hidden rounded-lg bg-light-grayish-blue font-bold lg:flex-row">
      <QuantityButton icon={Minus} />
      <span className="self-center lg:pl-7 lg:pr-[1.9rem]">0</span>
      <QuantityButton icon={Plus} />
    </div>
  );
};
export default QuantitySelector;
