import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Component/Nav'
import Hero from './sections/Hero'

function App() {

  return (
    <main className=' bg-[#151515] px-20'>
      <Nav />
      <Hero />
    </main>
  )
}

export default App
