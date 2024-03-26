import React from 'react'
import Nav from '../../Component/Nav'
import Hero from '../../sections/Hero'
import ListProjects from './ListProjects'
import Footer from '../../sections/Footer'

function Projects() {
  return (
    <main className='bg-[#151515] px-20'>
      <Nav />
      <Hero name="PROJECTS"/>
      <ListProjects />
      <Footer />
    
    </main>
  )
}

export default Projects