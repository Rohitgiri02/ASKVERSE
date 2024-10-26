import React from 'react'
import Navbar from "../components/share/Navbar/Navbar"

const Layout  = ({children} :{ children:React.ReactNode}) => {
  return (
    <main className='background-light_dark relative'>
        <Navbar/>
        <div className='flex'>
            leftbar
         <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14 '>
            <div className='mx-auto w-full max-w-5xl'>
                {children}
            </div>
         </section>
         rightbar
        </div>
        toast

    </main>
  )
}

export default Layout 