import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(true);
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">

      </nav>
    </>
  );
};

export default Navbar;
