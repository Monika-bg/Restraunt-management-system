import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Populardish from '../components/Populardish'
import WhoAreWe from '../components/WhoAreWe'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'

 const Home=()=> {
  return (
    <>
    <HeroSection />
    <About/>
    <Populardish/>
    <Qualities/> 
    <WhoAreWe/>
    <Reservation/>
    <Footer/>
    
    </>
         )
        
}
export default Home