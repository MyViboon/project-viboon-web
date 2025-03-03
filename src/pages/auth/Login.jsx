// // rafce
// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import useEcomStore from "../../store/ecom-store";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   // Javascript
//   const navigate = useNavigate();
//   const actionLogin = useEcomStore((state) => state.actionLogin);
//   const user = useEcomStore((state) => state.user);

//   // console.log("user form zustand", user);
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleOnChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await actionLogin(form);
//       const role = res.data.payload.role;
//       roleRedirect(role);
//       toast.success("Welcome Back");
//     } catch (err) {
//       console.log(err);
//       const errMsg = err.response?.data?.message;
//       toast.error(errMsg);
//     }
//   };

//   const roleRedirect = (role) => {
//     if (role === "admin") {
//       navigate("/admin");
//     } else {
//       // navigate(-1);
//       navigate("/");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex
//   items-center justify-center bg-gray-100"
//     >
//       <div className="w-full shadow-md bg-white p-8 max-w-md rounded-2xl">
//         <h1 className="text-2xl text-center my-4 font-bold">Login</h1>

//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <input
//               placeholder="Email"
//               className="border w-full px-3 py-2 rounded
//             focus:outline-none focus:ring-2 focus:ring-blue-500
//             focus:border-transparent"
//               onChange={handleOnChange}
//               name="email"
//               type="email"
//             />

//             <input
//               placeholder="Password"
//               className="border w-full px-3 py-2 rounded
//                     focus:outline-none focus:ring-2 focus:ring-blue-500
//                     focus:border-transparent"
//               onChange={handleOnChange}
//               name="password"
//               type="password"
//             />
//             <button
//               className="bg-blue-500 rounded-md
//              w-full text-white font-bold py-2 shadow
//              hover:bg-blue-700
//              "
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import useEcomStore from "../../store/ecom-store";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../../utils/LoadingScreen";

const Login = () => {
  const navigate = useNavigate();
  const actionLogin = useEcomStore((state) => state.actionLogin);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // เริ่มโหลด

    try {
      const res = await actionLogin(form);
      const role = res.data.payload.role;
      roleRedirect(role);
      toast.success("Welcome Back");
    } catch (err) {
      console.log(err);
      const errMsg = err.response?.data?.message || "Login failed";
      toast.error(errMsg);
    } finally {
      setLoading(false); // หยุดโหลด
    }
  };

  const roleRedirect = (role) => {
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {loading && <LoadingScreen />}{" "}
      <div className="w-full shadow-md bg-white p-8 max-w-md rounded-2xl">
        <h1 className="text-2xl text-center my-4 font-bold">Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              placeholder="Email"
              className="border w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={handleOnChange}
              name="email"
              type="email"
              disabled={loading}
            />

            <input
              placeholder="Password"
              className="border w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={handleOnChange}
              name="password"
              type="password"
              disabled={loading}
            />

            <button
              className={`bg-blue-500 rounded-md w-full text-white font-bold py-2 shadow hover:bg-blue-700 flex justify-center items-center ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "กำลังดำเนินการ" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
