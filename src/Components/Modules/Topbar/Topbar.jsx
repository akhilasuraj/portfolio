import React from "react";

const Topbar = () => {
  return (
    <div className="w-full h-32 bg-gray-300 flex items-center justify-between px-10 fixed top-0">
      <div className="flex items-center">
        <span className="text-2xl font-monument cursor-pointer">AKHILA</span>
        <span className="ml-28 font-semibold cursor-pointer">
          CALL ME. (+94) 76 - 6857 611
        </span>
        <span className="text-gray-400 font-normal text-xl px-10 cursor-default">/</span>
        <span className="font-semibold cursor-pointer">akhila.abesinghe@gmail.com</span>
      </div>
      <div className="w-9 h-7 flex flex-col justify-between cursor-pointer">
        <span className="w-full h-1 bg-black"></span>
        <span className="w-full h-1 bg-black"></span>
        <span className="w-full h-1 bg-black"></span>
      </div>
    </div>
  );
};

export default Topbar;
