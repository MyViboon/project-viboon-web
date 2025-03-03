// // rafce
// import React, { useState, useEffect } from "react";
// import { listUserCart, saveAddress } from "../../api/user";
// import useEcomStore from "../../store/ecom-store";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { numberFormat } from "../../utils/number";

// const SummaryCard = () => {
//   const clearCart = useEcomStore((s) => s.clearCart);
//   const token = useEcomStore((state) => state.token);
//   const [products, setProducts] = useState([]);
//   const [cartTotal, setCartTotal] = useState(0);

//   const [address, setAddress] = useState("");
//   const [addressSaved, setAddressSaved] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     hdlGetUserCart(token);
//   }, []);

//   const hdlGetUserCart = (token) => {
//     listUserCart(token)
//       .then((res) => {
//         // console.log(res)
//         setProducts(res.data.products);
//         setCartTotal(res.data.cartTotal);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const hdlSaveAddress = () => {
//     if (!address) {
//       return toast.warning("Please fill address");
//     }
//     saveAddress(token, address)
//       .then((res) => {
//         // console.log(res);
//         toast.success(res.data.message);
//         setAddressSaved(true);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   const hdlGoToPayment = () => {
//     if (!addressSaved) {
//       return toast.warning("กรุณากรอกทีอยู่ก่อนจ้า");
//     }
//     toast.success("จ่ายเงินเรียบร้อย");
//     navigate("/user/payment");
//     clearCart();
//   };

//   return (
//     // <div className="mx-auto">
//     //   <div className="flex flex-wrap gap-4">
//     //     {/* Left */}
//     //     <div className="w-2/4">
//     //       <div
//     //         className="bg-gray-100 p-4 rounded-md
//     //       border shadow-md space-y-4"
//     //       >
//     //         <h1 className="font-bold text-lg">ที่อยู่ในการจัดส่ง</h1>
//     //         <textarea
//     //           required
//     //           onChange={(e) => setAddress(e.target.value)}
//     //           placeholder="กรุณากรอกที่อยู่"
//     //           className="w-full px-2 rounded-md"
//     //         />
//     //         <button
//     //           onClick={hdlSaveAddress}
//     //           className="bg-blue-500 text-white
//     //         px-4 py-2 rounded-md shadow-md hover:bg-blue-700
//     //         hover:scale-105 hover:translate-y-1 hover:duration-200"
//     //         >
//     //           Save Address
//     //         </button>
//     //       </div>
//     //     </div>

//     //     {/* Right */}
//     //     <div className="w-2/4">
//     //       <div
//     //         className="bg-gray-100 p-4 rounded-md
//     //       border shadow-md space-y-4"
//     //       >
//     //         <h1 className="text-lg font-bold">คำสั่งซื้อของคุณ</h1>

//     //         {/* Item List */}

//     //         {products?.map((item, index) => (
//     //           <div key={index}>
//     //             <div className="flex justify-between items-end">
//     //               <div>
//     //                 <p className="font-bold">{item.product.title}</p>
//     //                 <p className="text-sm">
//     //                   จำนวน : {item.count} x {numberFormat(item.product.price)}
//     //                 </p>
//     //               </div>

//     //               <div>
//     //                 <p className="text-red-500 font-bold">
//     //                   {numberFormat(item.count * item.product.price)}
//     //                 </p>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         ))}

//     //         <div>
//     //           <div className="flex justify-between">
//     //             <p>ค่าจัดส่ง:</p>
//     //             <p>0.00</p>
//     //           </div>
//     //           <div className="flex justify-between">
//     //             <p>ส่วนลด:</p>
//     //             <p>0.00</p>
//     //           </div>
//     //         </div>

//     //         <hr />
//     //         <div>
//     //           <div className="flex justify-between">
//     //             <p className="font-bold">ยอดรวมสุทธิ:</p>
//     //             <p className="text-red-500 font-bold text-lg">
//     //               {numberFormat(cartTotal)}
//     //             </p>
//     //           </div>
//     //         </div>

//     //         <hr />
//     //         <div>
//     //           <button
//     //             onClick={hdlGoToPayment}
//     //             // disabled={!addressSaved}
//     //             className="bg-green-400 w-full p-2 rounded-md
//     //           shadow-md text-white hover:bg-green-600"
//     //           >
//     //             ดำเนินการชำระเงิน
//     //           </button>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//     <div className="mx-auto p-4">
//       <div className="flex flex-col md:flex-row gap-4">
//         {/* Left */}
//         <div className="w-full md:w-2/4">
//           <div className="bg-gray-100 p-4 rounded-md border shadow-md space-y-4">
//             <h1 className="font-bold text-lg">ที่อยู่ในการจัดส่ง</h1>
//             <textarea
//               required
//               onChange={(e) => setAddress(e.target.value)}
//               placeholder="กรุณากรอกที่อยู่"
//               className="w-full px-2 rounded-md"
//             />
//             <button
//               onClick={hdlSaveAddress}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 hover:scale-105 hover:translate-y-1 hover:duration-200"
//             >
//               Save Address
//             </button>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="w-full md:w-2/4">
//           <div className="bg-gray-100 p-4 rounded-md border shadow-md space-y-4">
//             <h1 className="text-lg font-bold">คำสั่งซื้อของคุณ</h1>

//             {/* Item List */}
//             {products?.map((item, index) => (
//               <div key={index} className="flex justify-between items-end">
//                 <div>
//                   <p className="font-bold">{item.product.title}</p>
//                   <p className="text-sm">
//                     จำนวน : {item.count} x {numberFormat(item.product.price)}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-red-500 font-bold">
//                     {numberFormat(item.count * item.product.price)}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             <div>
//               <div className="flex justify-between">
//                 <p>ค่าจัดส่ง:</p>
//                 <p>0.00</p>
//               </div>
//               <div className="flex justify-between">
//                 <p>ส่วนลด:</p>
//                 <p>0.00</p>
//               </div>
//             </div>

//             <hr />
//             <div>
//               <div className="flex justify-between">
//                 <p className="font-bold">ยอดรวมสุทธิ:</p>
//                 <p className="text-red-500 font-bold text-lg">
//                   {numberFormat(cartTotal)}
//                 </p>
//               </div>
//             </div>

//             <hr />
//             <div>
//               <button
//                 onClick={hdlGoToPayment}
//                 className="bg-green-400 w-full p-2 rounded-md shadow-md text-white hover:bg-green-600"
//               >
//                 ดำเนินการชำระเงิน
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SummaryCard;

import React, { useState, useEffect } from "react";
import { listUserCart, saveAddress } from "../../api/user";
import useEcomStore from "../../store/ecom-store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { numberFormat } from "../../utils/number";
import LoadingScreen from "../../utils/LoadingScreen";

const SummaryCard = () => {
  const clearCart = useEcomStore((s) => s.clearCart);
  const token = useEcomStore((state) => state.token);
  const [products, setProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    hdlGetUserCart(token);
  }, []);

  const hdlGetUserCart = (token) => {
    listUserCart(token)
      .then((res) => {
        setProducts(res.data.products);
        setCartTotal(res.data.cartTotal);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hdlSaveAddress = () => {
    if (!address) {
      return toast.warning("Please fill address");
    }
    setLoading(true);
    saveAddress(token, address)
      .then((res) => {
        toast.success(res.data.message);
        setAddressSaved(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const hdlGoToPayment = () => {
    if (!addressSaved) {
      return toast.warning("กรุณากรอกที่อยู่ก่อนจ้า");
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("จ่ายเงินเรียบร้อย");
      navigate("/user/payment");
      clearCart();
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="mx-auto p-4 relative">
      {loading && <LoadingScreen />}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/4">
          <div className="bg-gray-100 p-4 rounded-md border shadow-md space-y-4">
            <h1 className="font-bold text-lg">ที่อยู่ในการจัดส่ง</h1>
            <textarea
              required
              onChange={(e) => setAddress(e.target.value)}
              placeholder="กรุณากรอกที่อยู่"
              className="w-full px-2 rounded-md"
              disabled={loading}
            />
            <button
              onClick={hdlSaveAddress}
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 hover:scale-105 hover:translate-y-1 hover:duration-200"
              disabled={loading}
            >
              {loading ? "กำลังบันทึก..." : "Save Address"}
            </button>
          </div>
        </div>

        <div className="w-full md:w-2/4">
          <div className="bg-gray-100 p-4 rounded-md border shadow-md space-y-4">
            <h1 className="text-lg font-bold">คำสั่งซื้อของคุณ</h1>
            {products?.map((item, index) => (
              <div key={index} className="flex justify-between items-end">
                <div>
                  <p className="font-bold">{item.product.title}</p>
                  <p className="text-sm">
                    จำนวน : {item.count} x {numberFormat(item.product.price)}
                  </p>
                </div>
                <div>
                  <p className="text-red-500 font-bold">
                    {numberFormat(item.count * item.product.price)}
                  </p>
                </div>
              </div>
            ))}
            <div>
              <div className="flex justify-between">
                <p>ค่าจัดส่ง:</p>
                <p>0.00</p>
              </div>
              <div className="flex justify-between">
                <p>ส่วนลด:</p>
                <p>0.00</p>
              </div>
            </div>
            <hr />
            <div>
              <div className="flex justify-between">
                <p className="font-bold">ยอดรวมสุทธิ:</p>
                <p className="text-red-500 font-bold text-lg">
                  {numberFormat(cartTotal)}
                </p>
              </div>
            </div>
            <hr />
            <div>
              <button
                onClick={hdlGoToPayment}
                className="bg-green-400 w-full p-2 rounded-md shadow-md text-white hover:bg-green-600"
                disabled={loading}
              >
                {loading ? "กำลังดำเนินการ..." : "ดำเนินการชำระเงิน"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
