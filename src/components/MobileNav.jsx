import React from 'react'
import { LuMenu } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

import { FiHome } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdGridOn } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { SlBell } from "react-icons/sl";
import { FaHistory } from "react-icons/fa";

import { HiShoppingBag } from "react-icons/hi2";


import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
  } from "@/components/ui/sheet"
  

const MobileNav = () => {
  return (
            <Sheet key={"left"} >
              <SheetTrigger asChild>
                <label htmlFor="">
                  <LuMenu color='white' fontSize={"1.7rem"} />
                </label>
              </SheetTrigger>
              <SheetContent side={"left"}>
                <div className='flex ml-10 mb-6 gap-1 items-center justify-start'>   
                        <label htmlFor="" className="-mt-1 text-mainColor cursor-pointer">
                            <HiShoppingBag fontSize={"1.7rem"} />
                        </label>
                        <label
                        htmlFor=""
                        className="tracking-wide cursor-pointer text-mainColor text-[1.5rem]"
                        >
                        NearCart
                        </label>
                </div>
                <SheetClose asChild>
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
                </SheetClose>
              </SheetContent>
            </Sheet>
        );
}

export default MobileNav
