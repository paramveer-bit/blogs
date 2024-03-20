import React from 'react'
import recentOne from '../assets/recentOne.png'
import recentTwo from '../assets/recentTwo.png'
import recentThree from '../assets/recentThree.png'
import p1 from '../assets/p1.jpeg'

function Recent() {
  return (
    <div className='w-full text-white mt-10 h-[550px]'>
        {/* Receny blogs */}
        <div className='text-2xl font-semibold mb-5'>
            <h1>Recent blog posts</h1>
        </div>

        <div className='flex w-full py-2 space-x-2 h-[80%]'>
            {/* Left Single */}
            <div className='flex w-[50%] px-2 flex-col space-y-5 h-full'>
                <div className='h-[50%]'>
                    <img src={recentOne} alt="" className='w-full h-full'/>
                </div>
                <div className=' space-y-3'>
                    <h2 className='text-[#008DDA]'>Sunday, 1 Jan 2024</h2>
                    <h2 className='text-xl font-bold'>UX review presentations</h2>
                    <p> How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <ul className='flex space-x-5'>
                        <li>Design</li>
                        <li>Research</li>
                        <li>Presentation</li>
                    </ul>
                </div>

            </div>

            {/* Right Two */}
            <div className='flex flex-col px-2 space-y-7 w-[50%] h-full'>
                {/* rightOne */}
                <div className='flex w-full space-x-5 h-[50%]'>
                    <div className='w-[50%] object-scale-down h-full '><img src={recentTwo} alt="" className='w-full '  /></div>
                    <div className='w-[40%] space-y-4 overflow-hidden'>
                        <p className='text-[#008DDA]'>Sunday, 1 Jan 2023</p>
                        <p font- className='text-xl font-bold'>Migrationg to Linear 101</p>
                        <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...</p>
                        <ul className='flex space-x-5'>
                            <li>Design</li>
                            <li>Presentation</li>
                        </ul>
                    </div>
                </div>
                {/* Right TWo */}
                <div className='flex space-x-4 h-[50%]'>
                    <div className='w-[50%] object-scale-down h-full'><img src={recentThree} alt="" className='w-full'/></div>
                    <div className='w-[40%] space-y-5 overflow-hidden'>
                        <p className='text-[#008DDA]'>Sunday, 1 Jan 2023</p>
                        <p className='text-xl font-bold'>Migrationg to Linear 101</p>
                        <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get... </p>
                        <ul className='flex space-x-5'>
                            <li>Design</li>
                            <li>Presentation</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        

    </div>
  )
}

export default Recent