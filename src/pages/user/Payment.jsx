import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
import { payment } from "../../api/stripe";
import useEcomStore from "../../store/ecom-store";
// import CheckoutForm from "../../components/CheckoutForm";
import { useNavigate } from "react-router-dom";
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

import { CheckCircle } from "lucide-react";

const Payment = () => {
  const token = useEcomStore((s) => s.token);
  // const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const clearCart = useEcomStore((state) => state.clearCart);

  useEffect(() => {
    payment(token)
      .then((res) => {
        console.log(res);
        // setClientSecret(res.data.clientSecret);
        clearCart();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const appearance = {
  //   theme: "stripe",
  // };
  // Enable the skeleton loader UI for optimal loading.
  // const loader = "auto";

  return (
    // <div>
    //   {/* {clientSecret && (
    //     <Elements
    //       options={{ clientSecret, appearance, loader }}
    //       stripe={stripePromise}
    //     >
    //       <CheckoutForm />
    //     </Elements>
    //   )} */}
    //   <div className="text-center mt-auto">
    //     <h1 className="text-green-500">ทำรายการสำเร็จแล้ว</h1>
    //     <button onClick={() => navigate("/")}>ย้อนกลับ</button>
    //   </div>

    // </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
        <CheckCircle className="text-green-500 w-20 h-20 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          สั่งซื้อสำเร็จ!
        </h2>
        <p className="text-gray-600 mb-6">
          ขอบคุณที่ใช้บริการ ออเดอร์ของคุณได้รับการยืนยันแล้ว
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"
          onClick={() => navigate("/")}
        >
          ย้อนกลับ
        </button>
      </div>
    </div>
  );
};

export default Payment;
