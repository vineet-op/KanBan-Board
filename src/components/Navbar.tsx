import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center pt-6">


      <h1 className="text-red-500 text-lg font-bold">Dashboard</h1>

      <div className="text-center">
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;
