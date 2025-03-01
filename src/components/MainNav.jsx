// // rafce
// // rfce
// import React, { useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import useEcomStore from "../store/ecom-store";
// // import { ChevronDown } from "lucide-react";
// import { ChevronDown, Menu, X } from "lucide-react";

// function MainNav() {
//   // Javascript
//   const carts = useEcomStore((s) => s.carts);
//   const user = useEcomStore((s) => s.user);
//   const logout = useEcomStore((s) => s.logout);
//   // console.log(user.email);

//   const [isOpen, setIsOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);
//   const navigate = useNavigate();

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const logoutClick = () => {
//     logout();
//     navigate("/");
//   };

//   const activeClass = "bg-green-100 px-3 py-2 rounded-md text-lg font-medium";
//   const inactiveClass =
//     "hover:bg-green-50 px-3 py-2 rounded-md text-lg font-medium";

//   // console.log(carts.length);
//   // console.log(user);
//   return (
//     <nav className="fixed z-50 top-0 left-0 w-full bg-pink-100 shadow-md font-Itim">
//       <div className="mx-auto px-4">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex items-center gap-6 m-4">
//             <Link to="/" className="text-2xl font-bold mx-auto">
//               Viboon.IT
//             </Link>
//           </div>
//           <div className="flex gap-2 md:hidden items-center">
//             {user && (
//               <div className="flex gap-2">
//                 <span className="p-1">{user?.email.split("@")[0]}</span>
//                 <img
//                   className="w-8 h-8 rounded-full"
//                   src={
//                     user?.photoURL ||
//                     "https://cdn-icons-png.flaticon.com/128/1999/1999625.png"
//                   }
//                   alt="User Profile"
//                 />
//               </div>
//             )}
//             <button onClick={toggleMenu} className="relative">
//               {carts.length > 0 && (
//                 <span className="bg-red-600 text-white w-4 h-4 flex items-center justify-center rounded-full text-xs absolute top-0 left-1 transform translate-x-3 -translate-y-2">
//                   {carts.length}
//                 </span>
//               )}
//               {menuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-6 mx-auto">
//             <NavLink
//               onClick={closeMenu}
//               className={({ isActive }) =>
//                 isActive ? activeClass : inactiveClass
//               }
//               to={"/"}
//             >
//               {" "}
//               หน้าหลัก
//             </NavLink>
//             <NavLink
//               className={({ isActive }) =>
//                 isActive ? activeClass : inactiveClass
//               }
//               to="/shop"
//               onClick={closeMenu}
//             >
//               ร้านค้า
//             </NavLink>
//             {/* <NavLink
//               className={({ isActive }) =>
//                 isActive
//                   ? "bg-gray-200 px-3 py-2 rounded-md text-lg font-medium"
//                   : "hover:bg-slate-200 px-3 py-2 rounded-md text-lg font-medium "
//               }
//               to="/cart"
//               onClick={closeMenu}
//             >
//               ตะกร้า{" "}
//               {carts.length > 0 && (
//                 <span className="bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm absolute">
//                   {carts.length}
//                 </span>
//               )}
//             </NavLink> */}
//             <NavLink
//               className={({ isActive }) =>
//                 `relative px-3 py-2 rounded-md text-lg font-medium ${
//                   isActive ? activeClass : inactiveClass
//                 }`
//               }
//               to="/cart"
//               onClick={closeMenu}
//             >
//               ตะกร้า
//               {carts.length > 0 && (
//                 <span className="bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs absolute top-0 left-14 transform translate-x-22 -translate-y-1">
//                   {carts.length}
//                 </span>
//               )}
//             </NavLink>
//             <NavLink
//               className={({ isActive }) =>
//                 isActive ? activeClass : inactiveClass
//               }
//               to="/about"
//               onClick={closeMenu}
//             >
//               เกี่ยวกับ
//             </NavLink>
//           </div>

//           {/* User Menu */}
//           {user ? (
//             <div className="hidden md:flex items-center gap-5">
//               <span>{user?.email.split("@")[0]}</span>
//               <img
//                 className="w-8 h-8"
//                 src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png"
//               />
//               <button
//                 onClick={toggleDropdown}
//                 className="flex items-center gap-2"
//               >
//                 <ChevronDown />
//               </button>
//               {isOpen && (
//                 <div className="dropdown">
//                   <Link to="/user/history" className="dropdown-item">
//                     History
//                   </Link>
//                   <button
//                     onClick={logoutClick}
//                     className="dropdown-item  p-8 mr-3"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <div className="hidden md:flex items-center gap-4">
//               <NavLink
//                 className={({ isActive }) =>
//                   isActive ? activeClass : inactiveClass
//                 }
//                 to="/register"
//                 onClick={closeMenu}
//               >
//                 Register
//               </NavLink>
//               <NavLink
//                 className={({ isActive }) =>
//                   isActive ? activeClass : inactiveClass
//                 }
//                 to="/login"
//                 onClick={closeMenu}
//               >
//                 Login
//               </NavLink>
//             </div>
//           )}
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden flex flex-col gap-2 py-4 text-center">
//             <NavLink className="mobile-nav-item" to="/" onClick={closeMenu}>
//               หน้าหลัก
//             </NavLink>
//             <NavLink className="mobile-nav-item" to="/shop" onClick={closeMenu}>
//               ร้านค้า
//             </NavLink>
//             <NavLink
//               className="mobile-nav-item relative"
//               to="/cart"
//               onClick={closeMenu}
//             >
//               ตะกร้า{" "}
//               {carts.length > 0 && (
//                 <span className="bg-red-500 rounded-full w-6 aspect-square inline-block text-white">
//                   {carts.length}
//                 </span>
//               )}
//             </NavLink>
//             <NavLink
//               className="mobile-nav-item"
//               to="/about"
//               onClick={closeMenu}
//             >
//               เกี่ยวกับ
//             </NavLink>
//             {user ? (
//               <>
//                 <NavLink
//                   className="mobile-nav-item right-2"
//                   to="/user/history"
//                   onClick={closeMenu}
//                 >
//                   History
//                 </NavLink>
//                 <button onClick={logoutClick} className="mobile-nav-item">
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <NavLink
//                   className="mobile-nav-item"
//                   to="/register"
//                   onClick={closeMenu}
//                 >
//                   Register
//                 </NavLink>
//                 <NavLink
//                   className="mobile-nav-item"
//                   to="/login"
//                   onClick={closeMenu}
//                 >
//                   Login
//                 </NavLink>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default MainNav;

import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useEcomStore from "../store/ecom-store";
import { ChevronDown, Menu, X } from "lucide-react";
import ConfirmLogoutModal from "../utils/ConfirmLogoutModal";
// import ConfirmLogoutModal from "./ConfirmLogoutModal"; // import the modal

function MainNav() {
  const carts = useEcomStore((s) => s.carts);
  const user = useEcomStore((s) => s.user);
  const logout = useEcomStore((s) => s.logout);

  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // modal state

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setShowLogoutModal(true); // Show the confirmation modal
  };

  const confirmLogout = () => {
    logout();
    closeMenu();
    navigate("/");
    setShowLogoutModal(false); // Hide the modal after confirming logout
  };

  const cancelLogout = () => {
    setShowLogoutModal(false); // Close the modal without logging out
  };

  const activeClass = "bg-green-100 px-3 py-2 rounded-md text-lg font-medium";
  const inactiveClass =
    "hover:bg-green-50 px-3 py-2 rounded-md text-lg font-medium";

  return (
    <nav className="fixed z-50 top-0 left-0 w-full bg-pink-100 shadow-md font-Itim">
      <div className="mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-6 m-4">
            <Link to="/" className="text-2xl font-bold mx-auto">
              Viboon.IT
            </Link>
          </div>
          <div className="flex gap-2 md:hidden items-center">
            {user && (
              <div className="flex gap-2">
                <span className="p-1">{user?.email.split("@")[0]}</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={
                    user?.photoURL ||
                    "https://cdn-icons-png.flaticon.com/128/1999/1999625.png"
                  }
                  alt="User Profile"
                />
              </div>
            )}
            <button onClick={toggleMenu} className="relative">
              {carts.length > 0 && (
                <span className="bg-red-600 text-white w-4 h-4 flex items-center justify-center rounded-full text-xs absolute top-0 left-1 transform translate-x-3 -translate-y-2">
                  {carts.length}
                </span>
              )}
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 mx-auto">
            <NavLink
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to={"/"}
            >
              {" "}
              หน้าหลัก
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/shop"
              onClick={closeMenu}
            >
              ร้านค้า
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/cart"
              onClick={closeMenu}
            >
              ตะกร้า
              {carts.length > 0 && (
                <span className="bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs absolute top-0 left-14 transform translate-x-22 -translate-y-1">
                  {carts.length}
                </span>
              )}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/about"
              onClick={closeMenu}
            >
              เกี่ยวกับ
            </NavLink>
          </div>

          {/* User Menu */}
          {user ? (
            <div className="hidden md:flex items-center gap-5">
              <span>{user?.email.split("@")[0]}</span>
              <img
                className="w-8 h-8"
                src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png"
              />
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2"
              >
                <ChevronDown />
              </button>
              {isOpen && (
                <div className="dropdown">
                  <Link to="/user/history" className="dropdown-item">
                    History
                  </Link>
                  <button
                    onClick={handleLogout} // Open logout modal
                    className="dropdown-item  p-8 mr-3"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
                to="/register"
                onClick={closeMenu}
              >
                Register
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
                to="/login"
                onClick={closeMenu}
              >
                Login
              </NavLink>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-2 py-4 text-center">
            <NavLink className="mobile-nav-item" to="/" onClick={closeMenu}>
              หน้าหลัก
            </NavLink>
            <NavLink className="mobile-nav-item" to="/shop" onClick={closeMenu}>
              ร้านค้า
            </NavLink>
            <NavLink
              className="mobile-nav-item relative"
              to="/cart"
              onClick={closeMenu}
            >
              ตะกร้า{" "}
              {carts.length > 0 && (
                <span className="bg-red-500 rounded-full w-6 aspect-square inline-block text-white">
                  {carts.length}
                </span>
              )}
            </NavLink>
            <NavLink
              className="mobile-nav-item"
              to="/about"
              onClick={closeMenu}
            >
              เกี่ยวกับ
            </NavLink>
            {user ? (
              <>
                <NavLink
                  className="mobile-nav-item right-2"
                  to="/user/history"
                  onClick={closeMenu}
                >
                  History
                </NavLink>
                <button onClick={handleLogout} className="mobile-nav-item">
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  className="mobile-nav-item"
                  to="/register"
                  onClick={closeMenu}
                >
                  Register
                </NavLink>
                <NavLink
                  className="mobile-nav-item"
                  to="/login"
                  onClick={closeMenu}
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      <ConfirmLogoutModal
        isOpen={showLogoutModal}
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      />
    </nav>
  );
}

export default MainNav;
