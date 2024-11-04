import React from 'react'
import Navbar from "../components/share/Navbar/Navbar"
import  Sidebar  from "@/app/components/share/sidebar"
import Rightbar from '../components/share/Rightbar'
import Footer from '../components/Footer'

const Layout  = ({children} :{ children:React.ReactNode}) => {
  return (
    <main className='background-light_dark relative '>
        <Navbar/>
        <div className='flex pr-0'>
            <Sidebar/>
         <section className='flex min-h-screen h-fit overflow-x-scroll flex-1 flex-col pl-6 pr-0 pb-6 pt-36 max-md:pb-14 sm:px-14 '>
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