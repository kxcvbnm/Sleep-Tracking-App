import React from 'react'

export default function PrimaryButton( {text}: {text: string} ) {
  return (
    <button className="w-full sm:w-auto bg-blue-500 hover:bg-sky-500
    text-white sm:px-4 sm:py-2 px-3 py-1 text-sm sm:text-md rounded-xl font-medium 
    cursor-pointer">
        {text}
    </button>
  )
}
