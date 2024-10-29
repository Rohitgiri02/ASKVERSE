"use client"
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs';
import { Section } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {links} from "@/constant"
import { usePathname } from 'next/navigation';
export const Content = ()=>{
  const pathname = usePathname();
  return(
    <section className='flex h-full flex-col gap-5 pt-6 '>
      {links.map((item)=>{
        const active = (item.route===pathname);
        return(
        <SheetClose asChild key={item.route}>
          <Link href={item.route} className={`${active ? `bg-violet-500 rounded-full `:``}flex items-center justify-start gap-4 bg-transparent p-4`}>
          <img src={item.imageurl} width={22} height={22}></img>
          <p className=''>{item.alt}</p>
          </Link>
        </SheetClose>
      )})}
    </section>
  )
}
const Mobile_nav = () => {
  return (
    <Sheet>
  <SheetTrigger asChild>
    <GiHamburgerMenu className='sm:hidden'></GiHamburgerMenu>
  </SheetTrigger>
  <SheetContent side={'left'}>
  <SheetTitle className='flex justify-between items-center mt-4'>
      <Link href="/" className='flex items-center gap-1'>
        {/* <img src='' width={24} height={24} alt='logo'/> */}
        <p>ASK<span className=' text-purple-500'> Verse</span></p>
    </Link>
    <SignedIn>
        <UserButton></UserButton>
    </SignedIn>
    </SheetTitle>
    <div className='noscroll w-44 '>
    <SheetClose asChild>
    <Content/>
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