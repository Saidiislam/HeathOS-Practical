import React from "react";

export const DashboardHeader = ({ name }) => {
  return (
    <div className="w-full max-w-xl p-2 border-gray-200 sm:p-8 dark:bg-gray-800 dark:border-gray-700 cursor-pointer m-auto">
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-1 sm:py-2">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 flex-1 min-w-0">
                <h2 className="font-light	">Welcome <span className="font-bold">{name}</span>👋🏼</h2>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
