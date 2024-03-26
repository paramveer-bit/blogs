import React from 'react'
import p1 from '../../assets/p1.jpeg'

function Template(props) {
  return (
    <>
    <div className='w-full h-full'>        
        <img src={p1} alt="" className={`w-full ${props.height}`}/>  
        {console.log(props.height)}      
        <p className='py-5 text-3xl font-bold pr-16'>
           User Experience Design Dashboard Hotel Management
        </p>
        <p className='pr-3'>
           n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard.
        </p>
        <ul className='flex space-x-5 text-[14px] pt-5 font-bold'>
            <li className=' border-2 rounded-3xl p-1 bg-white text-[#4deeea]'>Leadership</li>
            <li className=' border-2 rounded-3xl p-1 bg-white text-[#f000ff]'>Managment</li>
            <li className=' border-2 rounded-3xl p-1 bg-white text-[#001eff]'>Presentation</li>
        </ul>
    </div>
    </>
  )
}

export default Template