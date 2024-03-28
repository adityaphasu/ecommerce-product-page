import { useState } from "react";
import { useCart } from "./context/CartContext";

import CartModal from "./components/Cart/CartModal";
import Header from "./components/Header/Header";
import ProductActions from "./components/Product/ProductActions";
import ProductDetails from "./components/Product/ProductDetails";
import ProductLightRoom from "./components/Product/ProductLightRoom";
import ProductSlider from "./components/Product/ProductSlider/ProductSlider";
import ProductThumbnailSelector from "./components/Product/ProductThumbnail/ProductThumbnailSelector";

import "./index.css";

function App() {
  const { isCartOpen } = useCart();

  const [isLightRoomOpen, setIsLightRoomOpen] = useState(false);

  const handleLightRoom = () => {
    setIsLightRoomOpen(true);
  };

  return (
    <>
      <Header />
      <main className="pb-20 lg:mx-auto lg:grid lg:max-w-[69rem] lg:grid-cols-2 lg:border-t lg:px-11 lg:pb-16 lg:pt-[5.5rem] xl:gap-20 ">
        {isCartOpen && <CartModal />}
        <div>
          <ProductSlider className="lg:hidden" />
          <ProductThumbnailSelector onClick={handleLightRoom} />
          {isLightRoomOpen && (
            <ProductLightRoom
              isLightRoomOpen={isLightRoomOpen}
              setIsLightRoomOpen={setIsLightRoomOpen}
            />
          )}
        </div>
        <div className="lg:flex lg:flex-col">
          <ProductDetails />
          <ProductActions />
        </div>
      </main>
    </>
  );
}

export default App;
