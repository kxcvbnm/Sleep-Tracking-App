import React from 'react'

export default function PrimaryButton( {text}: {text: string} ) {
  return (
    <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-sky-500
    to-cyan-500 hover:from-blue-600 hover:via-sky-600 hover:to-cyan-600
    text-white sm:px-4 sm:py-2 px-3 py-1 text-sm sm:text-md rounded-xl font-medium 
    cursor-pointer">
        {text}
    </button>
  )
}
