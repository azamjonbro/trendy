import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './Pages/Hero'
import Layout from './Pages/layout'
import Bruto from './Pages/Burto'
import Service from'./Pages/service'
import Slider from './components/slider'
import Shop from './Pages/Shop'
import Contact from './Pages/contact'
function Router() {
  return (
    <>
      <Navbar />
      <Hero />
      <Layout />
      <Bruto />
      <Service />
      <Slider />
      <Shop />
      <Contact />
      <Footer />
    </>
  )
}

export default Router
