import React, { useContext } from 'react'
import Navbar from '../components/Global/Navbar'
import HeroSection from '../components/Home/HeroSection'
import DetailsSection from '../components/Home/DetailsSection'
import SearchSection from '../components/Home/SearchSection'
import Footer from '../components/Global/Footer'
import userContext from "../context/UserContext";

const Home = () => {
  const context = useContext(userContext);
  const { dark } = context;

  return (
    <div className={`flex flex-col items-center transition ease-in-out duration-150 ${dark === 1 ? 'bg-background-dark' : 'bg-background'}`}>
      <Navbar />
      <HeroSection />
      <DetailsSection />
      <SearchSection />
      <Footer />
    </div>
  )
}

export default Home
