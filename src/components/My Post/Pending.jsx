import React from 'react'
import PostCard from './PostCard'

const Pending = () => {
  return (
    <div className=' w-full grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-y-5 place-items-center mt-5'>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
  )
}

export default Pending
