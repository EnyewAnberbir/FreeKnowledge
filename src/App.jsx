import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Porgrams/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container' >
      <Title subTitle="Our Program" title ="What we offer"/>
      <Programs />
      <About />
      <Title subTitle="Gallery" title="Our Campus Photos"/>
      <Testimonials />
      <Title subTitle="Get in Touch" title="Contact US"/>
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default App