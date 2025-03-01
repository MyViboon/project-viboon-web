import React, { useEffect } from "react";
import ProductCard from "../components/card/ProductCard";
import useEcomStore from "../store/ecom-store";
import SearchCard from "../components/card/SearchCard";
import CartCard from "../components/card/CartCard";
import { numberFormat } from "../utils/number";

const Shop = () => {
  const getProduct = useEcomStore((state) => state.getProduct);
  const products = useEcomStore((state) => state.products);
  const carts = useEcomStore((s) => s.carts);
  const getTotalPrice = useEcomStore((state) => state.getTotalPrice);

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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 bg-re">
          {products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="m-12 md:hidden"></div>

      {/* Cart */}

      {/* <div className="w-full md:w-1/4 p-4 bg-gray-100 md:min-h-screen md:sticky md:top-20 fixed bottom-0 left-0">
        <CartCard />
      </div> */}

      <div className="w-full md:w-1/4 p-4 bg-gray-100 md:min-h-screen md:sticky md:top-20 fixed bottom-0 left-0">
        <div className="hidden md:block">
          <CartCard />
        </div>

        {/* แสดงปุ่มสำหรับหน้าจอเล็ก */}
        <div className="item-center ">
          <div className="block md:hidden border p-2 bg-green-500 rounded-2xl">
            <div
              className="flex justify-between"
              onClick={() => (window.location.href = "/cart-total")}
            >
              <h1 className="text-center m-2 text-2xl text-white font-bold relative">
                รวมราคา
              </h1>
              {carts.length > 0 && (
                <span className="bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs absolute top-8 left-28 transform translate-x-3 -translate-y-1">
                  {carts.length}
                </span>
              )}
              <div className="flex items-center px-6 text-white rounded text-lg font-bold gap-2">
                <span>{numberFormat(getTotalPrice())}</span>
                บาท
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
