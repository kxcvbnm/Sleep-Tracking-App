import React from 'react'
import Link from 'next/link'
import { Bed, BedSingle } from 'lucide-react'

export default function Navbar() {
  return (
    <nav>
      <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-8 bg-zinc-800">
        <div className="flex items-center justify-between h-22">
            <Link href="/"
                  className="flex-shrink-0"
            >
          <div className="mx-20 flex items-center w-auto h-auto p-2">
              <BedSingle color="#51abff" className="w-6 h-6 mr-2 sm:w-8 sm:h-8 " />
              <span className="text-md sm:text-2xl font-bold bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent">
                Sleep Tracker
              </span>
          </div>
            </Link>

            <div className="flex items-center space-x-20 mx-20">
              <Link href="/">            
                <span>
                  Home
                </span>
              </Link>

              <Link href="About">
                <span>
                  About
                </span>
              </Link>

          

            </div>
        </div>
      </div>
    </nav>
  )
}
