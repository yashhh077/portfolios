import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 z-50">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-40 h-40 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>

        <div className="absolute w-28 h-28 rounded-full border-4 border-pink-500 border-b-transparent animate-spin-slow"></div>

        <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-black font-bold text-lg">
          YM
        </div>
      </div>

      <h2 className="mt-20 text-white text-xl tracking-widest animate-pulse">
        Loading...
      </h2>
    </div>
  );
}

export default Loader;
