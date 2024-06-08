import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { FaCrown } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";

function Navbar() {
  return (
    <div>
      <nav className=' bg-navbar-gradient md:flex md:flex-row flex flex-col items-center gap-8 justify-between p-1 pb-2 pt-2 text-white' >
        
        {/* // left nav-section */}

        <div className='flex flex-row gap-8 pl-6 '> 
        <div className='flex flex-row gap-4 '>
          <IoIosArrowBack className=' h-6 w-6  hover:text-yellow-300 hover:cursor-pointer'/>
          <p className='hover:text-yellow-300 hover:cursor-pointer'>Home</p>
        </div>
        <div className='hover:cursor-pointer hover:text-300 hover:text-yellow-300 '>
          File
        </div>
        <div className='flex flex-row gap-2 hover:text-yellow-300 hover:cursor-pointer'>
          <FaCrown className='mt-1 hover:text-yellow-300 hover:cursor-pointer'/>
          Resize
        </div>
        <div className='hover:cursor-pointer hover:text-yellow-300 '>
          All changes saved
        </div>
        </div>

        {/* // right nav-section */}

        <div className='flex flex-row gap-2 pr-6'>
          <button className="bg-white/20 p-2 rounded-md w-20 backdrop-filter backdrop-blur-lg ">Share</button>
          <button className='flex flex-row gap-2 bg-white/20 p-2 rounded-md w-20 backdrop-filter backdrop-blur-lg'>
            <FaPlay className='mt-1'/>
            55.8s</button>
          <button className='flex flex-row gap-2 bg-white/20 p-2 rounded-md w-auto backdrop-filter backdrop-blur-lg'>
            <MdOutlineFileDownload className=' h-7 w-7'/>
            </button>
          <button className='flex flex-row gap-2 bg-white rounded-md text-black p-2 text-md font-sans font-semibold'>
            <IoEyeSharp className='h-6 w-6' />
            Share Link to watch</button>
          <button className='bg-white p-2 text-md rounded-md text-black '>
          <HiDotsHorizontal className="mt-1 h-6 w-6"/> 
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
