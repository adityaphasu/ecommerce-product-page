import { cn } from "../../../lib/cn";

const ProductSliderButton = ({ icon, className, onClick }) => {
  return (
    <>
      <button
        aria-label={icon}
        onClick={onClick}
        className={cn(
          "group absolute flex items-center justify-center rounded-full bg-white",
          className
        )}>
        <img src={icon} alt="" className="group-hover:filtered-img" />
      </button>
    </>
  );
};
export default ProductSliderButton;
