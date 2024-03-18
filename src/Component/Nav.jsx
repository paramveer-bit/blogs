import React from 'react'
import { navLinks } from '../Constant'

function Nav() {
  return (
    <header className=" py-10 w-full text-3xl pl-20 pr-40 fixed font-semibold text-white">
        <nav className='flex justify-between'>
            <h2>Paramveer</h2>
            <ul className='flex justify-between'>
                {navLinks.map((item) => (
                    <li key={item.label} className='px-2'>
                        <a href='${item.href}'
                            className=' hover:border-b-2 px-2'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
    
  )
}

export default Nav