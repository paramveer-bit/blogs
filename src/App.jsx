import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Component/Nav'
import Hero from './sections/Hero'
import Recent from './sections/Recent'
import AllBlogs from './sections/AllBlogs'

function App() {

  return (
    <main className=' bg-[#151515] px-20'>
      <Nav />
      <Hero />
      <Recent />
      <AllBlogs />
    </main>
  )
}

export default App
