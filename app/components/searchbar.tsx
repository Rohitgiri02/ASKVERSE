import React from 'react'

const Searchbar = () => {
  return (
<form className='w-7/12' method="GET" action="">
  <div className="bg-white border-2  shadow p-2 relative rounded-xl h-12 flex justify-between ">
    <span className=" flex justify-end items-center text-gray-500 p-2 pl-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      <input name="episodequery" id="title" className="border-white outline-none border-0 rounded-xl pl-1 " type="text" placeholder="Explore Me" />
    </span>
    <button type="submit" className="bg-black hover:bg-gray-700 rounded-xl text-white text-xl p-1 pl-4 pr-4 ml-2 hidden lg:block">
      <p className="font-semibold text-xs">Search</p>
    </button>
  </div>
</form>

  )
}

export default Searchbar