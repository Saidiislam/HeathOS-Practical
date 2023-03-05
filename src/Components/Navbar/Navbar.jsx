import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Elements/Button";


const Navbar = () => {

  const [toggleNav, setToggleNav] = useState(false);
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <Button CustomOnClick={() => setToggleNav(!toggleNav)}>Click Me</Button>
      </nav>
      

      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex md:order-2">
            <button
              type="button"
              className="inline-flex border-0 items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setToggleNav(!toggleNav)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="md:hidden border-0 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
              onClick={() => setToggleNav(!toggleNav)}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>          
          </div>
        </div>
        {toggleNav && (
        <div
          className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 `}
        >
          <Button
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            CustomOnClick={() => setToggleNav(!toggleNav)}
          >
            Close
          </Button>
          <br/>
          <ul className="">
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
            <li><Link to={'/orders'}>Orders</Link></li>
            <li><Link to={'/'}>Products</Link></li>
            <li><Link to={'/customers'}>Customers</Link></li>
          </ul>
        </div>
      )}
      </nav>
    </>
  );
};

export default Navbar;
