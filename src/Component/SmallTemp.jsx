import React from 'react'
import p1 from '../assets/p1.jpeg'

function SmallTemp() {
  return (
    <div className='text-white h-full w-full'>
      <div className='h-[50%]'><img src={p1} alt="" className='h-full w-full' /></div>
      <div className='space-y-2 pt-6'>
        <p className='text-[#008DDA]'>Sunday, 1 Jan 2023</p>
        <p className='text-xl font-bold'>Bill Walsh leadership lessons</p>
        <p>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
        <ul className='flex space-x-5 text-[14px] pt-5 font-bold'>
          <li className=' border-2 rounded-3xl p-1 bg-white text-[#4deeea]'>Leadership</li>
          <li className=' border-2 rounded-3xl p-1 bg-white text-[#f000ff]'>Managment</li>
          <li className=' border-2 rounded-3xl p-1 bg-white text-[#001eff]'>Presentation</li>
        </ul>
      </div>
    </div>
  )
}

export default SmallTemp