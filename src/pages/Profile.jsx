import React, { useState } from 'react'
import { FaImage } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import kisanAvatar from '../../public/avatar.jpg'

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [firstName, setFirstName] = useState('Khilesh');
  const [lastName, setLastName] = useState('Sahu');
  const [email, setEmail] = useState('khileshanjole@gmail.com');
  const [phoneNo, setPhoneNo] = useState('+91 8629952220');
  const [address, setAddress] = useState('India, chhattisgarh chhuikhadan 491885');
  const [avatar, setAvatar] = useState(kisanAvatar)

  const editPersonalInfo = (evnet) => {
    event.preventDefault();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate URL for image
      setAvatar(imageUrl); // Set the image preview URL to state
    }
  }
  return (
    <div className='mr-4'>
      <label htmlFor="" className='font-semibold text-[1.5rem]'>My Profile</label>
      <div className='border rounded-xl py-3 px-4 mt-5 shadow-lg flex lg:flex-row flex-col md:flex-row justify-between items-start'>
        <div className='flex  items-center gap-3'>
          <img src={avatar} alt="" className='rounded-full size-20 shadow-sm border-mainColor border-2' />
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[1.3rem] font-semibold'>Khilesh</label>
            <label htmlFor="" className='opacity-80'>chhuikhadan, kcg, cg</label>
          </div>
        </div>
        <div className='mt-3 mr-2'>
          <label htmlFor="inputFile" className='cursor-pointer flex items-center gap-1 opacity-80 px-3 py-2 border-1 hover:scale-95 transition-all shadow-md rounded-xl'>
            Change Photo
            <FaImage/>
          </label>
          <input type="file" onChange={handleImageChange} className='hidden' id='inputFile' />
        </div>
      </div>

      <form onSubmit={editPersonalInfo} className='border rounded-xl py-2 pb-3 px-4 mt-5 shadow-lg'>
        <div className='w-full flex justify-between items-center'>
          <label htmlFor="">Personal information</label>
          <button type='submit' htmlFor="" onClick={()=>setIsEditMode(!isEditMode)} className={`cursor-pointer flex items-center gap-1 px-3 py-2 border-1 hover:scale-95 transition-all shadow-md rounded-xl ${isEditMode?"bg-green-600 text-white":"opacity-70"}`}>
            {isEditMode?"Update":"Edit"}
            {!isEditMode && <CiEdit/> }
          </button>
          </div>
        <div  className='grid grid-cols-2 mt-4 gap-14 px-4'>
          <div className='col-span-1 flex flex-col gap-3'>
            <label htmlFor="" className='text-[.8rem] opacity-40'>First Name</label>
            <input type='text' readOnly={!isEditMode}  value={firstName} onChange={(e)=>setFirstName(e.target.value)}  className={`profile_input_field ${`${isEditMode?'border-b-2 focus:border-mainColor':null}`}  w-[30%] outline-none text-[1rem]`}/>
          </div>
          <div className='col-span-1 flex flex-col gap-2'>
            <label htmlFor="" className='text-[.8rem] opacity-40'>Last Name</label>
            <input type='text' readOnly={!isEditMode} value={lastName} onChange={(e)=>setLastName(e.target.value)}   className={`profile_input_field ${`${isEditMode?'border-b-2 focus:border-mainColor':null}`}  w-[30%] outline-none text-[1rem]`}/>
          </div>
          <div className='col-span-1 flex flex-col gap-3'>
            <label htmlFor="" className='text-[.8rem] opacity-40'>Email address</label>
            <input type='text' readOnly={!isEditMode}  value={email} onChange={(e)=>setEmail(e.target.value)}  className={`profile_input_field ${`${isEditMode?'border-b-2 focus:border-mainColor':null}`}  w-[50%] outline-none text-[1rem]`}/>
          </div>
          <div className='col-span-1 flex flex-col gap-2'>
            <label htmlFor="" className='text-[.8rem] opacity-40'>Phone No.</label>
            <input type='text' readOnly={!isEditMode} value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)}   className={`profile_input_field ${`${isEditMode?'border-b-2 focus:border-mainColor':null}`}  w-[50%] outline-none text-[1rem]`}/>
          </div>
          <div className='col-span-1 flex flex-col gap-2'>
            <label htmlFor="" className='text-[.8rem] opacity-40'>Address</label>
            <input type='text' readOnly={!isEditMode} value={address} onChange={(e)=>setAddress(e.target.value)}   className={`profile_input_field ${`${isEditMode?'border-b-2 focus:border-mainColor':null}`}  w-[80%] outline-none text-[1rem]`}/>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Profile
