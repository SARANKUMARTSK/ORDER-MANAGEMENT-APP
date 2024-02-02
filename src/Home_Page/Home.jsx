import React from 'react'
import Topbar from './Topbar'
import About from './About'
import Services from './Services'
import Testimonial from './Testimonial'
import Footer from './Footer'
import { Element } from 'react-scroll'
function Home() {
  return <>
  <Element name="about" >
      <Topbar />
      <About />
      <Services />
      <Testimonial />
      <Footer />
  </Element>
  
  </>
}

export default Home