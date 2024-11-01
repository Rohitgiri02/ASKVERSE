import React from 'react'
import Navbar from "../components/share/Navbar/Navbar"
import  Sidebar  from "@/app/components/share/sidebar"
import Rightbar from '../components/share/Rightbar'

const Layout  = ({children} :{ children:React.ReactNode}) => {
  return (
    <main className='background-light_dark relative '>
        <Navbar/>
        <div className='flex'>
            <Sidebar/>
         <section className='flex min-h-screen h-fit overflow-x-scroll flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14 '>
            <div className='mx-auto w-full max-w-5xl h-fit'>
                {children}
            </div>
         </section>
         rightbar
        </div>
    </main>
  )
}

export default Layout 