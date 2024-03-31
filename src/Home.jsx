import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Properties from './Components/Properties/Properties'
import Offers from './Components/Offers/Offers'
import Recently from './Components/Recently/Recently'
import Footer from './Components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Properties/>
      <Offers/>
      <Recently/>
      <Footer/>
    </div>
  )
}

export default Home
