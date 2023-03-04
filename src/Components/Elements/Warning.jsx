import React from 'react'

export const Warning = ({title}) => {
  return (
    <div className="w-full max-w-xl p-2 rounded-lg border-2 border-gray-200 sm:p-8 dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-slate-50 hover:delay-50 hover:ease-out duration-300 last:border-0 m-auto">
        <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <p className="text-sm font-medium text-center text-gray-900 truncate dark:text-white">
                            {title}
                          </p>
                        </div>
                    </li>
                </ul>
        </div>
    </div>
  )
}
