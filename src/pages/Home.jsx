import ShopCard from '@/components/ShopCard';
import React, { useState } from 'react'
import { TbAdjustmentsHorizontal } from "react-icons/tb";

const Home = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [filter, setFilter] = useState('Filter')

  const handleFilter = (elm) => {
    if(elm === 'Default') return
    setFilter(elm)
  }

  return (
    <div className='relative '>
      <div className='inline-block ' onClick={()=>setOpenFilter(true)}>
        <label htmlFor="select" className='cursor-pointer flex justify-center items-center opacity-80 gap-1 rounded-md border-2 px-3 py-1 text-[1.1rem] font-light tracking-normal'>{filter} KM <label htmlFor="select"><TbAdjustmentsHorizontal/></label></label>
      </div>
     {openFilter && <div className='absolute min-w-[10%] z-50 border-2  border-mainColor -ml-1'>
        <ul className='bg-slate-100 pt-1' onClick={()=>setOpenFilter(false)}>
          {
            ['Default',1,2,5,10,'All'].map((elm)=>{
              return <li key={elm} onClick={()=>handleFilter(elm)} className='p-1 pl-2 cursor-pointer hover:bg-slate-300 opacity-70 font-extralight border-b-2'>{elm !== 'All' && elm !== 'Default'?`${elm} KM`:elm} </li>
            })
          }
        </ul>
      </div>}

      <div className='mt-6'>
        <label htmlFor="" className='text-[1.3rem] font-bold'>Near shop {filter>0?`${filter} KM`:''}</label>
        <div className='grid pr-4 gap-10 md:grid-cols-2 mt-2 grid-cols-1 lg:grid-cols-3'>
          <ShopCard/>
          <ShopCard/>
          <ShopCard/>
          <ShopCard/>
          <ShopCard/>
          <ShopCard/>
          <ShopCard/>
        </div>
      </div>
    </div>
  )
}

export default Home
