import { useState } from "react";

const Topbar = ({ setCurentPage }) => {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <div className="w-full h-28 bg-transparent flex items-center justify-between px-16 fixed z-50 text-gray-900">
      <span
        className="text-2xl font-monument cursor-pointer"
        onClick={() => setCurentPage(0)}
      >
        AKHILA
      </span>
      <div className="flex items-center ">
        <span className="font-semibold cursor-pointer">
          <a href="tel:+94766857611">CALL ME. (+94) 76-6857 611</a>
        </span>
        <span className="font-normal text-xl px-8 cursor-default text-gray-700">
          /
        </span>
        <span className="font-semibold cursor-pointer">
          <a href="mailto:akhila.abesinghe@gmail.com">
            akhila.abesinghe@gmail.com
          </a>
        </span>
      </div>
      <div
        className="w-9 h-7 flex flex-col justify-between cursor-pointer"
        onClick={() => setSideMenu((n) => !n)}
      >
        <span
          className={`w-full h-1 bg-gray-900 origin-left transform ease-in-out duration-700 ${
            sideMenu ? "rotate-45" : ""
          }`}
        />
        <span
          className={`w-full h-1 bg-gray-900 transform ease-in-out duration-700 ${
            sideMenu ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`w-full h-1 bg-gray-900 origin-left transform ease-in-out duration-700 ${
            sideMenu ? "-rotate-45" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Topbar;
