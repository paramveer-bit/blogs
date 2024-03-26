import React from 'react'
import Template from './Template'

function ListProjects() {
  return (
    <div className='text-white pt-10 w-full'>
        <div>
            <h1 className=' text-2xl font-semibold'>List Project</h1>
        </div>
        {/* Two  images */}
        <div className='flex h-[600px] w-full space-x-10 pt-10'>
            <Template className='w-[50%] h-full' height='h-[50%]'/>
            <Template className='w-[50%] h-full' height='h-[50%]'/>
        </div>
        <div className='h-[700px] w-full pt-8'>
            <Template className='w-[50%] h-full' height='h-[70%]'/>            
        </div>
        <div className='flex h-[600px] w-full space-x-10 pt-10'>
            <Template className='w-[50%] h-full' height='h-[50%]'/>
            <Template className='w-[50%] h-full' height='h-[50%]'/>
        </div>
    </div>
  )
}

export default ListProjects