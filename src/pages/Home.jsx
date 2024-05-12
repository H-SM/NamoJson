import React from 'react'
import Navbar from '../components/Global/Navbar'
import HeroSection from '../components/Home/HeroSection'
import DetailsSection from '../components/Home/DetailsSection'
import SearchSection from '../components/Home/SearchSection'
import Footer from '../components/Global/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <Navbar/>
      <HeroSection/>
      <DetailsSection/>
      <SearchSection/>
      <Footer/>
    </div>
  )
}

export default Home
