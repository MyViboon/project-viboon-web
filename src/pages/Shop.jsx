import React, { useEffect } from "react";
import ProductCard from "../components/card/ProductCard";
import useEcomStore from "../store/ecom-store";
import SearchCard from "../components/card/SearchCard";
import CartCard from "../components/card/CartCard";

const Shop = () => {
  const getProduct = useEcomStore((state) => state.getProduct);
  const products = useEcomStore((state) => state.products);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    // <div className="flex flex-col md:flex-row min-h-screen mt-20">
    //   {/* SearchBar */}
    //   <div className="w-full md:w-1/4 p-4 bg-gray-100 h-auto md:min-h-screen">
    //     <SearchCard />
    //   </div>

    //   {/* Product */}
    //   <div className="w-full md:w-1/2 p-4 min-h-screen overflow-y-auto ">
    //     <p className="text-2xl font-bold mb-4">สินค้าทั้งหมด</p>
    //     <div className="flex flex-wrap gap-4 md:gap-6">
    //       {products.map((item, index) => (
    //         <ProductCard key={index} item={item} />
    //       ))}
    //     </div>
    //   </div>

    //   {/* Cart */}
    //   <div className="w-full md:w-1/4 p-4 bg-gray-100  overflow-y-auto">
    //     <CartCard />
    //   </div>
    // </div>
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* SearchBar */}
      <div className="w-full md:w-1/4 p-4 bg-gray-100 md:min-h-screen md:sticky md:top-20">
        <SearchCard />
      </div>

      {/* Product */}
      <div className="flex-1 p-4 min-h-screen overflow-y-auto">
        <p className="text-2xl font-bold mb-4">สินค้าทั้งหมด</p>
        {/* <div className="flex flex-wrap gap-4 bg-re md:gap-6">
          {products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div> */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-re">
          {products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="m-20 md:hidden"></div>

      {/* Cart */}

      <div className="w-full md:w-1/4 p-4 bg-gray-100 md:min-h-screen md:sticky md:top-20 fixed bottom-0 left-0">
        <CartCard />
      </div>
    </div>
  );
};

export default Shop;
