import AddToCartButton from "../Cart/AddToCartButton";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

const ProductActions = () => {
  return (
    <div className="flex flex-col gap-3.5 px-6 lg:flex-row lg:pr-0 lg:pt-2">
      <QuantitySelector />
      <AddToCartButton />
    </div>
  );
};
export default ProductActions;
