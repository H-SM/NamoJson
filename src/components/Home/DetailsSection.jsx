import React from 'react'
import fetchSvg from "./../../assets/fetch.svg";
import displaySvg from "./../../assets/display.svg";
import searchSvg from "./../../assets/search.svg";

const DetailsSection = () => {
    return (
        <div className='relative w-full h-fit z-0 overflow-hidden my-5'>
            <div className='absolute z-10  left-[10%] top-[-20%] animate-bounce-slow opacity-70'>
                <div className='bg-text w-[8rem] h-[8rem] rounded-2xl rotate-[30deg]'/>
            </div>

            <div className=' absolute z-10 right-[10%] bottom-[-20%] animate-bounce-slow-late opacity-70'>
                <div className='bg-text w-[8rem] h-[8rem] rounded-2xl rotate-[80deg]'/>
            </div>

            <div className='w-full h-fit py-6  bg-gradient-to-t from-primary to-accent flex justify-center items-center gap-5 font-inter text-text'>
                <div className='bg-background w-[18rem] h-[11rem] rounded-2xl flex justify-center items-start py-5 z-20'>
                    <div className='w-full mx-3 h-fit flex justify-start gap-2'>
                        <div className='w-8 h-8  mt-2'>
                            <img src={fetchSvg} alt="fetch" />
                        </div>
                        <div className='w-[12rem] flex flex-col justify-start items-start'>
                            <p className='font-bold text-[1.7rem]'>Fetch</p>
                            <p className='text-[0.9rem]'>Retrieve user details from provided API, returning JSON array including name, email, address, and more.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-background w-[18rem] h-[11rem] rounded-2xl flex justify-center items-start py-5 z-20'>
                    <div className='w-full mx-3 h-fit flex justify-start gap-2'>
                        <div className='w-8 h-8  mt-2'>
                            <img src={displaySvg} alt="fetch" />
                        </div>
                        <div className='w-[12rem] flex flex-col justify-start items-start'>
                            <p className='font-bold text-[1.7rem]'>Display</p>
                            <p className='text-[0.9rem]'>Organize fetched user data into a table format for easy viewing on web pages.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-background w-[18rem] h-[11rem] rounded-2xl flex justify-center items-start py-5 z-20'>
                    <div className='w-full mx-5 h-fit flex justify-start gap-2'>
                        <div className='w-8 h-8 mt-2'>
                            <img src={searchSvg} alt="fetch" />
                        </div>
                        <div className='w-[12rem] flex flex-col justify-start items-start'>
                            <p className='font-bold text-[1.7rem]'>Search</p>
                            <p className='text-[0.9rem]'>Enable users to find specific users by name input, refining displayed results accordingly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsSection
