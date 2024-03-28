import { products } from "../../constants";
import { cn } from "../../lib/cn";

const ProductImage = ({ productIndex, className, onClick }) => {
  return (
    <img
      src={products[productIndex]}
      alt="Sneaker"
      className={cn("h-[19rem] w-full md:h-full lg:rounded-xl", className)}
      onClick={onClick}
    />
  );
};
export default ProductImage;
