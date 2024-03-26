import React from 'react'
import SmallTemp from '../Component/SmallTemp'

function AllBlogs() {
  return (
    <>
    <h1 className='text-white pb-6 text-2xl'>All Blog Posts</h1>
    <div className='flex flex-col justify-between space-y-4 h-[1000px]'>
      <div className='flex space-x-3 h-[50%]'>
        <SmallTemp />
        <SmallTemp />
        <SmallTemp />
      </div>
      <div className='flex space-x-3 h-[50%]'>
        <SmallTemp />
        <SmallTemp />
        <SmallTemp />
      </div>

    </div>
    </>
  )
}

export default AllBlogs