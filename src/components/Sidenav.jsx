import React from 'react'
import { NavLink } from 'react-router-dom';

import { FiHome } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdGridOn } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { SlBell } from "react-icons/sl";
import { FaHistory } from "react-icons/fa";

const Sidenav = () => {
  return (
    <>
    <div className='h-[calc(100vh-66px)] md:block hidden lg:block pt-4 fixed col-span-2'>
      <div className='flex flex-col gap-2 px-6'>
        <NavLink to={'/'} className={({isActive}) => `p-5 font-semibold flex items-center gap-2 rounded-md  ${isActive ? 'bg-slate-200 text-mainColor' : ''}`}>
             <label htmlFor=""><FiHome className='text-[1.4rem]'/></label>   
             <label htmlFor="" className='text-[1.1rem]'>Home</label>   
        </NavLink>
        <NavLink to={'/profile'} className={({isActive}) => `p-5 font-semibold flex items-center gap-2 rounded-md ${isActive ? 'bg-slate-200 text-mainColor' : ''}`}>
             <label htmlFor=""><FaRegUserCircle className='text-[1.4rem]'/></label>   
             <label htmlFor="" className='text-[1.1rem]'>Profile</label>   
        </NavLink>
        <NavLink to={'/my-post'} className={({isActive}) => `p-5 font-semibold flex items-center gap-2 rounded-md ${isActive ? 'bg-slate-200 text-mainColor' : ''}`}>
             <label htmlFor=""><MdGridOn className='text-[1.4rem]'/></label>   
             <label htmlFor="" className='text-[1.1rem]'>My Post</label>   
        </NavLink>          
        <NavLink to={'/chat'} className={({isActive}) => `p-5 font-semibold flex items-center gap-2 rounded-md ${isActive ? 'bg-slate-200 text-mainColor' : ''}`}>
             <label htmlFor=""><MdOutlineMessage className='text-[1.4rem]'/></label>   
             <label htmlFor="" className='text-[1.1rem]'>Chat</label>   
        </NavLink>          
        <NavLink to={'/notification'} className={({isActive}) => `p-5 font-semibold flex items-center gap-2 rounded-md ${isActive ? 'bg-slate-200 text-mainColor' : ''}`}>
             <label htmlFor=""><SlBell className='text-[1.4rem]'/></label>   
             <label htmlFor="" className='text-[1.1rem]'>Notification</label>   
        </NavLink>          
        <NavLink to={'/history'} className={({isActive}) => `p-5 font-semibold flex items-center gap-2 rounded-md ${isActive ? 'bg-slate-200 text-mainColor' : ''}`}>
             <label htmlFor=""><FaHistory className='text-[1.4rem]'/></label>   
             <label htmlFor="" className='text-[1.1rem]'>History</label>   
        </NavLink>          
      </div>
    </div>
    </>
  )
}

export default Sidenav
