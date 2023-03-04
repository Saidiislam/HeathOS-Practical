import React from "react";
import Image from "../../../assets/shoe.png";
import { Button } from "../Button";

export const List = ({ name, description, price, items, productImage }) => {
  return (
    <div className="w-full max-w-xl p-2 border-b-[2px] border-gray-200 sm:p-8 dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-slate-50 hover:delay-50	hover:ease-out duration-300  last:border-0 m-auto">
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="h-20 w-20 border bg-cover bg-center rounded-lg"
                  src={productImage}
                  alt={name}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {name}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {description}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {price && !items ? (
                    `${price} BDT`
                  ) : items && !price ? (
                    `${items} Items`
                  ) : (
                    <>
                      {`${price} BDT`} <span className="text-xl"> &#183; </span>{" "}
                      {`${items} Items`}
                    </>
                  )}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <Button Btype={Button}>View</Button> 
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
