import React from 'react'

const Hero= (props) => {
  return (
    <div className='text-white pt-40 px-4'>
        <div className='w-full py-2 text-center'>
            <h1 className=' font-bold text-[200px] border-y-[3px] '>{props.name}</h1>
        </div> 
    </div>
  )
}



export default Hero