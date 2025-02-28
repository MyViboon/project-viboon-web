// rafce

import React from "react";
import useEcomStore from "../../store/ecom-store";

const HeaderAdmin = () => {
  const user = useEcomStore((s) => s.user);
  return (
    <header className="bg-white h-16 flex justify-end items-center px-6">
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
    </header>
  );
};

export default HeaderAdmin;
