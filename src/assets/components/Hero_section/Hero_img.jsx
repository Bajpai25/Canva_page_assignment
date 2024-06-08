import React, { useState } from 'react'
import { FaCircleNotch } from "react-icons/fa";
import { BsFolderPlus } from "react-icons/bs";
import { IoDuplicateOutline , } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { LuRectangleHorizontal } from "react-icons/lu";
import { FaCircle } from "react-icons/fa";
import { PiCardsLight } from "react-icons/pi";
import { RiCollapseDiagonalFill } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";

function Hero_img() {
    
    const img_data=[
        {
            id:1,
            url:"https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },{
            id:2,
            url:"https://images.pexels.com/photos/1201613/pexels-photo-1201613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },{
            id:3,
            url:"https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },{
            id:4,
            url:"https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },{
            id:5,
            url:"https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
    
    const [select,setselect]=useState(img_data[0].url);
    
  return (
    <div className='w-full h-auto'>

        {/* // image section */}

     <nav className='flex flex-row w-full justify-between gap-6 bg-[#FEFFFF] shadow-lg shadow-gray-400 p-3 '>
        <div className='flex flex-row gap-4'>
      <FaCircleNotch className=' mt-1 h-6 w-6'/>
      <h1 className='text-lg'>Fade</h1>
      </div>
        <div className='flex flex-row gap-6 justify-center'>
        <BsFolderPlus className='h-6 w-6'/>
        <IoDuplicateOutline className='h-6 w-6'/>
        <RiDeleteBin6Line className='h-6 w-6'/>
        </div>
        </nav>
        <div className='bg-[#ECF0F3] w-full h-auto flex justify-center'>
            <img className=' relative flex flex-row bg-cover justify-center w-auto h-[450px] pt-6 rounded-md  p-12' src={select}></img>
            <h1 className='absolute inset-30 pt-40 text-center text-white text-5xl  font-sans font-light'>daily healthy habits<br/> to live by</h1>
            </div>

            {/* // image video section  */}
          
            <div className='flex flex-row gap-2 relative'>  
            <MdOutlinePlayCircleOutline className='border-solid-2 border-white rounded-full h-12 w-12 shadow-gray-400 shadow-md mt-12 ml-4'/>
            <div className='flex flex-row mt-3 overflow-hidden  border-b-4 mb-4 border-[#7642ED]  '>
                {img_data.map((item,id)=>{
                    return (
                      <div key={id} className="flex flex-row  gap-2">
                        <img
                          onClick={() => {
                            setselect(item.url);
                          }}
                          className="relative hover:cursor-pointer hover:border-4 p-1 hover:border-[#C7C7C7] rounded-md hover:shadow-lg shadow-gray-600 m-1 h-[120px] w-[130px]  "
                          src={item.url}
                          alt="img"
                        />
                        <hr className='w-full h-2 bg-[#7642ED]'></hr>
                        <FiPlusCircle className="h-4 w-4 text-black bg-white rounded-full mt-12 inset-30 ml-[122px] absolute" />
                      </div>
                    );
                })}
            </div>
            </div>
            <hr className=' w-1/4 h-1 bg-gray-300 border-none'></hr>

            {/* // image footer section */}

            <div>
             <nav className='flex p-2 flex-row justify-between  font-semibold'>
                <div className='flex flex-row gap-12'>
              <h1 className='mt-2'>Notes</h1>
              <h2 className='mt-2'>0:00 / 0:55</h2> 
              </div>
              <div className='flex flex-row gap-4'>
               <LuRectangleHorizontal className='mt-2 h-6 w-6'/>
                <div className='flex flex-row text-gray-400'>
                <FaCircle className='mt-3 text-black'/>
                __________________
                </div>
                <h1 className='mt-2'>34%</h1>
                <PiCardsLight className='mt-2 h-6 w-6'/>
                <RiCollapseDiagonalFill className=' mt-2 h-6 w-6'/>
                <h1 className='text-gray-400 text-lg pt-1'>|</h1>
                <FaRegQuestionCircle className='mt-2 h-6 w-6'/>
                </div> 
                </nav>   
            </div>
            </div>
  )
}

export default Hero_img
