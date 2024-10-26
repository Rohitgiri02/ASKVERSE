import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Mobile_nav = () => {
  return (
    <Sheet>
  <SheetTrigger asChild>
    <GiHamburgerMenu className='sm:hidden'></GiHamburgerMenu>
  </SheetTrigger>
  <SheetContent side={'left'}>
  <SheetTitle className='flex justify-between items-center mt-4'>
      <Link href="/" className='flex items-center gap-1'>
        <img src='' width={24} height={24} alt='logo'/>
        <p>ASK<span className=' text-purple-500'> Verse</span></p>
    </Link>
    <SignedIn>
        <UserButton></UserButton>
    </SignedIn>
    </SheetTitle>
    <div className='noscroll '>
    <SheetClose asChild>
    navcontent
    </SheetClose>
    </div>
    <div>
    <SignedOut>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient"><SignInButton /></span>
                </Button>
            </SheetClose>
          </div>
        </SignedOut>
    </div>
  </SheetContent>
</Sheet>
  )
}

export default Mobile_nav