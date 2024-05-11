import React from 'react'
import Navbar from '../components/Home/Navbar'
import HeroSection from '../components/Home/HeroSection'
import DetailsSection from '../components/Home/DetailsSection'

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <Navbar/>
      <HeroSection/>
      <DetailsSection/>
    </div>
  )
}

export default Home
