"use client"
import { links } from '@/constant';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className=' sticky z-40 left-0 top-0 flex h-screen bg-white flex-col gap-5 pt-28 w-36 shadow-md overflow-y-auto max-sm:hidden lg:w-[200px]'>
      {links.map((item)=>{
        const active = (item.route===pathname);
        return(
          <Link href={item.route} className={`${active ? ` bg-gradient-to-r from-violet-500 from-30% to-sky-400 rounded-full `:``}flex items-center justify-start gap-4 bg-transparent p-4 hover:border-2 border-violet-500 transition-all rounded-full` }>
          <img src={item.imageurl} width={22} height={22}></img>
          <p className=''>{item.alt}</p>
          </Link>
      )})}
    </section>
  )
}

export default Sidebar