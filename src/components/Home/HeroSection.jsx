import React from 'react'
import circleAsset from "./../../assets/circle_assest.png"

const HeroSection = () => {
    return (
        <div className="lg:w-[60rem] w-full md:w-[50rem] max-w-[70rem] flex justify-between items-center my-[5rem]">
            <div className='flex flex-col md:text-[2.5rem] text-center w-full lg:w-full md:text-left lg:text-[3.5rem] sm:text-[2.9rem] text-[2.3rem] font-inter h-[20rem] justify-center items-center '>
                <h1 className='text-text font-extrabold sm:w-[40rem] md:w-full lg:w-[40rem]'>
                    Let's <span className='text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text'>Namojson</span>,<br /> get your details simply, hurdle-free!
                </h1>
            </div>
            <div className='md:flex hidden'>
                <img className="w-[30rem] animate-spin-slow" src={circleAsset} alt="spin_here"/>
            </div>
        </div>
    )
}

export default HeroSection
