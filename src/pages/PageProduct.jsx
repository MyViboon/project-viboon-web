import React, { useEffect, useState } from "react";
import useEcomStore from "../store/ecom-store";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const PageProduct = () => {
  const { id } = useParams();
  const products = useEcomStore((state) => state.products);
  const actionAddtoCart = useEcomStore((state) => state.actionAddtoCart);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return <div className="text-center text-gray-500">Loading product...</div>;
  }
  console.log(product);

  return (
    <div className="max-w-4xl mx-auto p-6 ิ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <img
          src={product.images[0].url}
          alt={product.title}
          className="w-full h-96 object-contain rounded-lg shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-blue-600">
            {product.price} บาท
          </p>
          <div className="flex justify-between">
            <button
              onClick={() => actionAddtoCart(product)}
              className="mt-4 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 shadow-md"
            >
              <ShoppingCart /> สั่งซื้อ
            </button>
            <button
              onClick={() => navigate("/shop")}
              className="mt-4 flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-700 shadow-md"
            >
              ย้อนกลับ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageProduct;
