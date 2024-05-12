import React from 'react'
import logo from "./../../assets/namoJson_logo.png"
const Footer = () => {
    return (
        <div className='bg-accent/20 w-full max-w-[80rem] h-fit rounded-md my-5 mx-3 flex flex-col items-center justify-center py-2'>
            <div className='w-[80%] py-8 flex justify-between items-start border-b border-primary'>
                <div className='flex justify-start items-start w-[20%]'>
                    <img src={logo} className="w-[10rem]" alt="" />
                </div>
                <div className='w-fit h-fit font-inter'>
                    <h1 className='font-semibold'>Explore</h1>
                    <p className='font-light'>Home</p>
                    <p className='font-light'>Docs</p>
                </div>
                <div className='flex flex-col w-[15rem] h-fit font-inter'>
                    <h1 className='font-semibold'>Contact Me</h1>
                    <a href='https://hsmhere.me/' className='font-light'>Portfolio</a>
                    <a href='https://github.com/H-SM' className='font-light'>GitHub</a>
                    <a href='https://www.linkedin.com/in/harman-singh-hsm' className='font-light'>LinkedIn</a>
                    <a href='https://instagram.com/hsmpaaji?igshid=ZGUzMzM3NWJiOQ==' className='font-light'>Instagram</a>
                </div>
            </div>
            <div className='w-[80%] py-5 flex justify-start items-start flex-col'>
                <p>Made with 🖤  <a href="https://github.com/H-SM"><u> @H-SM</u></a></p>
                <p className='text-[0.7rem]'>Copyright © 2024 All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
