import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import Mobile_nav from './Mobile_nav';
import Searchbar from '../../searchbar';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center fixed z-50 w-full gap-5 p-6 bg-white shadow-md transition duration-200 ease-in-out sm:px-12 '>
        <Link href="/" className='flex items-center gap-1'>
        {/* <img src='./ask-verse\app\assets\logo.jpg' width={24} height={24} alt='logo'/> */}
        <p className='font-bold text-xl'>ASK<span className=' text-purple-500'> Verse</span></p>
        </Link>
      <Searchbar></Searchbar>
      <div className='hidden sm:block'>
      <SignedIn >
            <UserButton/>
          </SignedIn>
      </div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
      <Mobile_nav></Mobile_nav>
    </nav>
  )
}

export default Navbar