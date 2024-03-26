import React from 'react'
import Left from '../assets/Left.svg'
import Right from '../assets/Right.svg'

const num = [1,2,3,4,5]

function PageNavigator() {
  return (
    <div className='flex justify-between text-white border-t-2 pt-8 border-gray-400'>
        <div className='flex'>
            <img src={Left} alt="" className=' fill-white'/>
            <h1 className='pt-2 pl-2'>Previous</h1>
        </div>
        <div>
            <ul className='flex '>
                {num.map((temp)=>(
                   <li className=' hover:bg-white hover:text-black p-2 px-4 hover:rounded'>{temp}</li> 
                ))}
            </ul>
        </div>
        <div className='flex'>
            <h1 className=' pt-1.5 pr-2'>Next</h1>
            <img src={Right} alt=""/>
        </div>
    </div>
  )
}

export default PageNavigator