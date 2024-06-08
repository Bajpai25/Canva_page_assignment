
import React, { useState } from 'react';
import { GrTemplate } from "react-icons/gr";
import { TbIcons } from "react-icons/tb";
import { IoCloudUploadSharp } from "react-icons/io5";
import { TbTextSize } from "react-icons/tb";
import { BiSolidVideos } from "react-icons/bi";
import { FaChartSimple } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const url="https://images.pexels.com/photos/1726310/pexels-photo-1726310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const url2="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const url3="https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const url4="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row h-auto">

      {/* Static Sidebar */}
      
      <div className='bg-[#0F1317] text-[#92969B] w-24 h-full flex flex-col items-center pt-4'>
        <div className='flex flex-col gap-6 w-full'>
          <p className='flex flex-col items-center hover:bg-[#2A3136] hover:text-white w-full p-2 cursor-pointer'>
            <GrTemplate className='h-6 w-6' />
            <span className='text-sm mt-1'>Template</span>
          </p>
          <p className='flex flex-col items-center hover:bg-[#2A3136] hover:text-white w-full p-2 cursor-pointer'>
            <TbIcons className='h-6 w-6' />
            <span className='text-sm mt-1'>Elements</span>
          </p>
          <p className='flex flex-col items-center hover:bg-[#2A3136] hover:text-white w-full p-2 cursor-pointer'>
            <IoCloudUploadSharp className='h-6 w-6' />
            <span className='text-sm mt-1'>Uploads</span>
          </p>
          <p className='flex flex-col items-center hover:bg-[#2A3136] hover:text-white w-full p-2 cursor-pointer'>
            <TbTextSize className='h-6 w-6' />
            <span className='text-sm mt-1'>Text</span>
          </p>
          <p className='flex flex-col items-center hover:bg-[#2A3136] hover:text-white w-full p-2 cursor-pointer'>
            <BiSolidVideos className='h-6 w-6' />
            <span className='text-sm mt-1'>Videos</span>
          </p>
          <p className='flex flex-col items-center hover:bg-[#2A3136] hover:text-white w-full p-2 cursor-pointer'>
            <FaChartSimple className='h-6 w-6' />
            <span className='text-sm mt-1'>Charts</span>
          </p>
          <p className='flex flex-col items-center hover:bg-[#2A3136] hover:text-white w-full p-2 cursor-pointer'>
            <HiDotsHorizontal className='h-6 w-6' />
            <span className='text-sm mt-1'>More</span>
          </p>
        </div>
      </div>

      {/* Collapsible Sidebar */}

      <div className={`relative bg-[#2A3138] pt-4 pl-2 pr-2 h-auto overflow-hidden  transition-all duration-300 ${isOpen ? 'w-[334px]' : 'w-[30px]'}`}>
        {isOpen && (
          <>
            <div className='flex flex-row gap-2 bg-white p-2 rounded-md'>
              <CiSearch className=' h-6 w-6'/>
              <input type="text" placeholder='Search videos' className='w-full'/>
            </div>
            <button className='text-white w-[300px] p-2 text-center bg-[#7239E0] mt-4 mb-3'>Record Yourself</button>
            <div className='flex flex-row mt-2 mb-2 justify-between'>
              <h1 className='font-sans text-lg text-white font-semibold'>Aerial Shots</h1>
              <h3 className='text-[#ADB4BC] pr-2'>See all</h3>
            </div>
            <div className='flex flex-row gap-4'>
              <img className='w-[140px] h-auto' src={url} alt="img"></img>
              <img className='w-[140px] h-auto' src={url} alt="img"></img>
            </div>
            <div className='flex flex-row mt-2 mb-2 justify-between'>
              <h1 className='font-sans text-lg text-white font-semibold'>Nature</h1>
              <h3 className='text-[#ADB4BC] pr-2'>See all</h3>
            </div>
            <div className='flex flex-row gap-4'>
              <img className='w-[140px] h-auto' src={url2} alt="img"></img>
              <img className='w-[140px] h-auto' src={url2} alt="img"></img>
            </div>
            <div className='flex flex-row mt-2 mb-2 justify-between'>
              <h1 className='font-sans text-lg text-white font-semibold'>Business</h1>
              <h3 className='text-[#ADB4BC] pr-2'>See all</h3>
            </div>
            <div className='flex flex-row gap-4'>
              <img className='w-[140px] h-auto' src={url3} alt="img"></img>
              <img className='w-[140px] h-auto' src={url3} alt="img"></img>
            </div>
            <div className='flex flex-row mt-2 mb-2 justify-between'>
              <h1 className='font-sans text-lg text-white font-semibold'>Beach</h1>
              <h3 className='text-[#ADB4BC] pr-2'>See all</h3>
            </div>
            <div className='flex flex-row gap-4'>
              <img className='w-[140px] h-auto' src={url4} alt="img"></img>
              <img className='w-[140px] h-auto' src={url4} alt="img"></img>
            </div>
          </>
        )}
        <button onClick={toggleSidebar} className='absolute text-white -right-3 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-full  border-2 border-white'>
          {isOpen ? < IoIosArrowBack /> : <IoIosArrowForward />}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
