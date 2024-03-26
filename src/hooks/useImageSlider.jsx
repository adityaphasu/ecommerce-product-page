import { useState } from "react";
import { products } from "../constants";

const useImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage === products.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentImage === 0) {
      setCurrentImage(products.length - 1);
    } else {
      setCurrentImage((prev) => prev - 1);
    }
  };

  return { currentImage, setCurrentImage, handleNext, handlePrev };
};
export default useImageSlider;
