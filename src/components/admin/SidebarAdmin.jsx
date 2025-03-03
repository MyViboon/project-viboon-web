// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   LayoutDashboard,
//   UserCog,
//   SquareChartGantt,
//   ShoppingBasket,
//   ListOrdered,
//   LogOut,
// } from "lucide-react";
// import useEcomStore from "../../store/ecom-store";
// import LoadingScreen from "../../utils/LoadingScreen";

// const SidebarAdmin = () => {
//   const logout = useEcomStore((s) => s.logout);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const HandleLogout = async () => {
//     setLoading(true);
//     await logout(); // รอให้ logout เสร็จก่อน
//     navigate("/");
//     setLoading(false);
//   };

//   return (
//     <div
//       className="bg-gray-800 w-64 text-gray-100
//     flex flex-col h-screen"
//     >
//       <div
//         className="h-24 bg-gray-900 flex items-center
//       justify-center text-2xl font-bold"
//       >
//         Admin Panel
//       </div>

//       <nav className="flex-1 px-4 py-4 space-y-2">
//         {loading && <LoadingScreen />}{" "}
//         <NavLink
//           to={"#"}
//           end
//           className={({ isActive }) =>
//             isActive
//               ? "bg-gray-900 rounded-md text-white px-4 py-2 flex items-center"
//               : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
//           }
//         >
//           <LayoutDashboard className="mr-2" />
//           Dashboard
//         </NavLink>
//         <NavLink
//           to={"manage"}
//           className={({ isActive }) =>
//             isActive
//               ? "bg-gray-900 rounded-md text-white px-4 py-2 flex items-center"
//               : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
//           }
//         >
//           <UserCog className="mr-2" />
//           Manage
//         </NavLink>
//         <NavLink
//           to={"category"}
//           className={({ isActive }) =>
//             isActive
//               ? "bg-gray-900 rounded-md text-white px-4 py-2 flex items-center"
//               : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
//           }
//         >
//           <SquareChartGantt className="mr-2" />
//           Category
//         </NavLink>
//         <NavLink
//           to={"product"}
//           className={({ isActive }) =>
//             isActive
//               ? "bg-gray-900 rounded-md text-white px-4 py-2 flex items-center"
//               : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
//           }
//         >
//           <ShoppingBasket className="mr-2" />
//           Product
//         </NavLink>
//         <NavLink
//           to={"orders"}
//           className={({ isActive }) =>
//             isActive
//               ? "bg-gray-900 rounded-md text-white px-4 py-2 flex items-center"
//               : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
//           }
//         >
//           <ListOrdered className="mr-2" />
//           Orders
//         </NavLink>
//       </nav>

//       <div>
//         <NavLink
//           onClick={HandleLogout}
//           className={({ isActive }) =>
//             isActive
//               ? "bg-gray-900 rounded-md text-white px-4 py-2 flex items-center"
//               : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
//           }
//         >
//           <LogOut className="mr-2" />
//           Logout
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default SidebarAdmin;
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  UserCog,
  SquareChartGantt,
  ShoppingBasket,
  ListOrdered,
  LogOut,
} from "lucide-react";
import useEcomStore from "../../store/ecom-store";

const SidebarAdmin = () => {
  const logout = useEcomStore((s) => s.logout);
  const navigate = useNavigate();

  const HandleLogout = () => {
    logout(); // รอให้ logout เสร็จก่อน
    navigate("/");
  };

  return (
    <div className="bg-gray-800 w-64 text-gray-100 flex flex-col h-screen">
      <div className="h-24 bg-gray-900 flex items-center justify-center text-2xl font-bold">
        Admin Panel
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        <NavLink
          to={"/admin"}
          end
          className={({ isActive }) =>
            isActive
              ? "bg-gray-900 rounded-md text-white px-4 py-2 flex items-center"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <LayoutDashboard className="mr-2" />
          Dashboard
        </NavLink>
        <NavLink
          to={"manage"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-900 rounded-md text-white px-4 py-2 flex items-center"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <UserCog className="mr-2" />
          Manage
        </NavLink>
        <NavLink
          to={"category"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-900 rounded-md text-white px-4 py-2 flex items-center"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <SquareChartGantt className="mr-2" />
          Category
        </NavLink>
        <NavLink
          to={"product"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-900 rounded-md text-white px-4 py-2 flex items-center"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <ShoppingBasket className="mr-2" />
          Product
        </NavLink>
        <NavLink
          to={"orders"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-900 rounded-md text-white px-4 py-2 flex items-center"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <ListOrdered className="mr-2" />
          Orders
        </NavLink>
      </nav>

      <div>
        <NavLink
          to={"#"}
          onClick={HandleLogout} // ✅ ย้าย onClick มาไว้ที่ NavLink
          className="text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
        >
          <LogOut className="mr-2" />
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default SidebarAdmin;
