import React from 'react'
import Link from 'next/link'
import { Bed, BedSingle, SquareMenuIcon } from 'lucide-react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { checkUser } from '@/lib/checkUser';
import PrimaryButton from './PrimaryButton';

export default async function Navbar() {

  const user = await checkUser();

  return (
    <nav>
      <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-8 bg-zinc-800">
        <div className="flex items-center justify-center md:justify-between h-22">
            <Link href="/"
                  className="flex-shrink-0"
            >
          <div className="flex items-center w-auto h-auto p-2">
              <BedSingle color="#51abff" className="w-6 h-6 mr-2 sm:w-8 sm:h-8 " />
              <span className="flex items-center text-md sm:text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-zinc-200 bg-clip-text text-transparent">
                Sleep Tracker
              </span>
          </div>
            </Link>

            <div className="hidden items-center sm:hidden md:flex space-x-14">
              <Link href="/">            
                <span className="hover:text-blue-400">
                  Home
                </span>
              </Link>

              <Link href="/about">
                <span className="hover:text-blue-400">
                  About
                </span>
              </Link>

              <SignedOut>
                <SignInButton>
                  <PrimaryButton text="Sign In"/>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
              
            </div>
        </div>
      </div>
    </nav>
  )
}
