import { useState } from "react";

import ProductImage from "../ProductImage";
import ProductThumbnails from "./ProductThumbnails";

const ProductThumbnailSelector = ({ onClick }) => {
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  return (
    <div className="hidden lg:mr-[1.35rem] lg:grid lg:grid-cols-4 lg:gap-8">
      <ProductImage
        productIndex={selectedThumbnail}
        onClick={onClick}
        className="lg:col-span-4"
      />
      <ProductThumbnails
        selectedThumbnail={selectedThumbnail}
        setSelectedThumbnail={setSelectedThumbnail}
      />
    </div>
  );
};
export default ProductThumbnailSelector;
