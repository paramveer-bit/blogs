import React from 'react'
import p1 from '../assets/p1.jpeg'

function SmallTemp() {
  return (
    <div className='text-white'>
      <div><img src={p1} alt="" /></div>
      <div className='space-y-2'>
        <p className='text-[#008DDA]'>Sunday, 1 Jan 2023</p>
        <p className='text-xl font-bold'>Bill Walsh leadership lessons</p>
        <p>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
        <ul className='flex space-x-5'>
          <li>Leadership</li>
          <li>Managment</li>
          <li>Presentation</li>
        </ul>
      </div>
    </div>
  )
}

export default SmallTemp