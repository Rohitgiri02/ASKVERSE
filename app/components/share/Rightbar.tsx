import Link from 'next/link'
import React from 'react'
interface topcontributors{
    name:String

}
const Rightbar = () => {
  const topcontributors=[{name:"RG"},{name:"Himanshu"},{name:"Rajan"},{name:"Saiyam"},{name:"Ansh"}]
  return (
    <section className='sticky right-0 top-0 flex h-screen bg-slate-100 flex-col gap-5 pt-24 w-36 overflow-y-auto max-lg:hidden lg:w-[200px]'>
        <div className='flex-col'>
            <h3 className='pl-3 font-bold'>TOP CONTRIBUTORS</h3>
            <section className=' col-auto'>
             {topcontributors.map((item)=>{
              return(
                <Link href={"/"}>
                {item.name}
                </Link>
              )
             })}

            </section>
            <h3 className='pl-3 font-bold'>TAGS</h3>
        </div>
    </section>
  )
}

export default Rightbar