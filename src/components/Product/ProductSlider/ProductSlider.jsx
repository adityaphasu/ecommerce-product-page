import { cn } from "../../../lib/cn";
import { Next, Previous } from "../../../assets/icons";

import ProductSliderButton from "./ProductSliderButton";
import ProductImage from "../ProductImage";

import useImageSlider from "../../../hooks/useImageSlider";

const ProductSlider = ({ className }) => {
  const { currentImage, handleNext, handlePrev } = useImageSlider();

  return (
    <div className={cn("relative lg:col-span-4", className)}>
      <ProductImage productIndex={currentImage} />
      <ProductSliderButton
        onClick={handlePrev}
        className="left-4 top-[43%] size-10 pl-2"
        icon={Previous}
      />
      <ProductSliderButton
        onClick={handleNext}
        className="right-4 top-[43%] size-10 pr-2"
        icon={Next}
      />
    </div>
  );
};
export default ProductSlider;
