import React from 'react'
import { CiShop } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { LuCircleDot } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";

const ShopCard = () => {
  return (
        <div className='grid grid-rows-5 max-h-[250px] border h-auto rounded-md shop_card'>
          <div className=' row-span-3 overflow-hidden'>
            <div className='relative h-full'>
              <img src="./thumbnail.png" alt="" className='z-10 w-full h-full'/>
              <div class="absolute inset-0 bg-black opacity-70 z-10"></div>
              <div className='w-full absolute top-[30%] flex justify-center z-40'>
                <img src="./avatar.jpg" alt="" className='rounded-full border-2 border-mainColor size-20' />
              </div>
            </div>
          </div>
          <div className='px-1 py-1 row-span-2 bg-slate-100'>
            <div className='flex justify-between'>
              <label className='text-[1.2rem] opacity-80 flex items-center gap-1'><CiShop/>Anna Kirana Stores</label>
              <label htmlFor="" className='flex items-center gap-1 font-semibold mr-1 text-blue-600 font-sans'><FaLocationDot/>4KM</label>
            </div>
            <div className='opacity-50 flex items-center px-1 gap-1'>
              <label htmlFor=""><LuCircleDot fontSize={'.7rem'}/></label>
              <label className='text-[.9rem] flex items-center gap-2'>Category <GoDotFill fontSize={'.5rem'}/></label>
              <label className='text-[.9rem] '>Kirana </label>
            </div>
            <div className='opacity-50 flex items-center px-1 gap-1'>
              <label htmlFor=""><LuCircleDot fontSize={'.7rem'}/></label>
              <label className='text-[.8rem] italic flex items-center gap-2'>Address <GoDotFill fontSize={'.5rem'}/></label>
              <label className='text-[.9rem] italic'>chhuikhadan, kcg </label>
            </div>
          </div>
        </div>
  )
}

export default ShopCard
