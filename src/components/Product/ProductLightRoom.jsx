import { Close, Next, Previous } from "../../assets/icons";

import ProductImage from "./ProductImage";
import ProductSliderButton from "./ProductSlider/ProductSliderButton";
import ProductThumbnails from "./ProductThumbnail/ProductThumbnails";

import useImageSlider from "../../hooks/useImageSlider";

const ProductLightRoom = ({ IsLightRoomOpen, setIsLightRoomOpen }) => {
  const { currentImage, setCurrentImage, handleNext, handlePrev } = useImageSlider();

  const handleClick = () => {
    setIsLightRoomOpen(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 size-full bg-black/75" onClick={handleClick}></div>
      <div className="absolute left-[30%] right-[30%] top-[11.2%] z-50 grid grid-cols-4 place-items-center gap-8">
        <button
          aria-label={IsLightRoomOpen && "Close light room"}
          onClick={handleClick}
          className="group">
          <img
            src={Close}
            alt=""
            className="group-hover:filtered-img absolute -top-4 right-3 z-50 size-6 brightness-[3]"
            aria-label="Close light room"
          />
        </button>

        <div className="col-span-4 px-3.5">
          <ProductImage productIndex={currentImage} />
        </div>

        <ProductSliderButton
          onClick={handlePrev}
          icon={Previous}
          className="-left-3.5 top-[34.8%] size-14 "
        />
        <ProductSliderButton
          onClick={handleNext}
          icon={Next}
          className="-right-3.5 top-[34.8%] size-14 "
        />

        <div className="col-span-4 grid grid-cols-4 gap-8 px-8">
          <ProductThumbnails
            selectedThumbnail={currentImage}
            setSelectedThumbnail={setCurrentImage}
          />
        </div>
      </div>
    </>
  );
};
export default ProductLightRoom;
