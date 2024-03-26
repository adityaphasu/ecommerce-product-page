const ProductDetails = () => {
  return (
    <section className="space-y-3.5 px-6 py-[1.3rem] lg:mt-11 lg:space-y-5 lg:px-[1.4rem]">
      <h1 className="text-xs font-bold uppercase tracking-[0.14em] text-orange lg:text-[0.8rem]">
        Sneaker Company
      </h1>
      <div className="space-y-4 lg:space-y-[2.1rem]">
        <h2 className="text-[1.76rem] font-bold leading-8 text-very-dark-blue lg:text-[2.75rem] lg:leading-[3rem]">
          Fall Limited Edition Sneakers
        </h2>
        <p className="text-[15.2px] font-medium leading-relaxed text-dark-grayish-blue lg:leading-[1.6rem] lg:tracking-wide">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="flex justify-between pt-4 lg:flex-col lg:gap-2 lg:pt-[0.5rem]">
        <div className="flex items-start gap-4">
          <strong className="text-3xl leading-8 text-very-dark-blue">
            $125.00
          </strong>
          <strong className="rounded-md bg-pale-orange px-2.5 py-0.5 text-orange">
            50%
          </strong>
        </div>
        <div>
          <del className="text-[17.5px] font-bold text-grayish-blue">
            $250.00
          </del>
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;
