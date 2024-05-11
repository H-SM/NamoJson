import React from 'react'
import circleAsset from "./../../assets/circle_assest.png"

const HeroSection = () => {
    return (
        <div className="w-full max-w-[70rem] flex justify-between my-[5rem]">
            <div className='flex flex-col text-[4rem] lg:text-[3.5rem] font-inter h-[20rem] justify-center'>
                <h1 className='text-text font-extrabold w-[40rem]'>
                    Let's <span className='text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text'>Namojson</span>,<br /> get your details simply, hurdle-free!
                </h1>
            </div>
            <div>
                <img className="w-[20rem] animate-spin-slow" src={circleAsset} alt="spin_here"/>
            </div>
        </div>
    )
}

export default HeroSection
