import React from 'react'

export const Button = ({children, CustomOnClick}) => {
  return (
    <button
    type="button"
    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    onClick={CustomOnClick}>{children}</button>
  )
}
