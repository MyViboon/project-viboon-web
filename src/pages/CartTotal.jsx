import React, { useEffect } from "react";
import ProductCard from "../components/card/ProductCard";
import useEcomStore from "../store/ecom-store";
import SearchCard from "../components/card/SearchCard";
import CartCard from "../components/card/CartCard";
import { numberFormat } from "../utils/number";

const Shop = () => {
  const getProduct = useEcomStore((state) => state.getProduct);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {/* SearchBar */}

      {/* Cart */}

      <div className="w-auto bg-gray-100">
        <CartCard />
      </div>
    </div>
  );
};

export default Shop;
