
import Nav from '../Component/Nav'
import Hero from '../sections/Hero'
import Recent from '../sections/Recent'
import AllBlogs from '../sections/AllBlogs'
import PageNavigator from '../sections/PageNavigator'
import Footer from '../sections/Footer'

function App() {

  return (
    <main className=' bg-[#151515] px-20'>
      <Nav />
      <Hero name="THE BLOG"/>
      <Recent />
      <AllBlogs />
      <PageNavigator />
      <Footer />
    </main>
  )
}

export default App
