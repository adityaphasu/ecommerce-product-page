const QuantityButton = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="grid w-[3.75rem] place-items-center bg-light-grayish-blue py-[1.35rem] transition hover:bg-pale-orange lg:w-11 lg:py-[1.43rem]"
      aria-label={icon}>
      <img src={icon} alt="" />
    </button>
  );
};
export default QuantityButton;
