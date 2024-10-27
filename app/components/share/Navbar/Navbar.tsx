import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import Mobile_nav from './Mobile_nav';

const Navbar = () => {
  return (
    <nav className=' flex justify-between items-center fixed z-50 w-full gap-5 p-6 shadow-stone-300 sm:px-12 '>
        <Link href="/" className='flex items-center gap-1'>
        {/* <img src='./ask-verse\app\assets\logo.jpg' width={24} height={24} alt='logo'/> */}
        <p>ASK<span className=' text-purple-500'> Verse</span></p>
        </Link>
      search
      <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
      <Mobile_nav></Mobile_nav>
    </nav>
  )
}

export default Navbar