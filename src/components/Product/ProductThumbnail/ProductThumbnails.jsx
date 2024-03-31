import { thumbnails } from "../../../constants";
import { cn } from "../../../lib/cn";

const ProductThumbnails = ({ selectedThumbnail, setSelectedThumbnail }) => {
  return (
    <>
      {thumbnails.map((thumbnails, idx) => (
        <button
          key={idx}
          onClick={() => setSelectedThumbnail(idx)}
          className={cn(
            "relative overflow-hidden rounded-xl transition lg:col-span-1",
            selectedThumbnail === idx && "ring-[2.5px] ring-orange"
          )}
          aria-label={`Select thumbnail ${idx + 1}`}>
          <img src={thumbnails} alt="" />
          <span
            className={cn(
              "absolute inset-0 rounded-xl transition",
              selectedThumbnail === idx ? "bg-white/50" : "hover:bg-white/50"
            )}
          />
        </button>
      ))}
    </>
  );
};
export default ProductThumbnails;
