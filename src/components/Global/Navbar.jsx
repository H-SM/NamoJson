import React, { useState } from 'react'
import logo from '../../assets/namoJson_logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // let navigate = useNavigate();
  const [ opener, setOpener ] = useState(0);
  return (
    <>
      <header className="relative z-40 w-full max-w-[90rem] flex-none text-sm font-semibold leading-6 text-text">
        <nav aria-label="Global" className="mx-auto max-w-container px-4 sm:px-6 lg:px-10">
          <div className="relative flex items-center py-[2.125rem]">
            <a href='/' className="flex-none"><span className="sr-only">NamoJson.</span>
              <img src={logo} alt="logo_here" className='w-[10rem]' />
            </a>
            <div className="ml-auto hidden lg:flex lg:items-center">
              <a href='/' className="ml-8" >Home</a>
              <a href='/docs' className="ml-8">Docs</a>
            </div>
            <></>
            <div className={` right-0 bottom-[-2rem] bg-secondary/30 rounded-lg w-[10rem] h-fit ${opener ? "absolute" : "hidden"}`}>
              <a href="/" className='w-full h-fit px-3 py-1  flex justify-start items-center hover:bg-white/30 animate ease-in-out duration-200'>Home</a>
              <a href="/docs" className='w-full h-fit px-3 py-1  flex justify-start items-center hover:bg-white/30 animate ease-in-out duration-200'>Docs</a>
            </div>
            <button type="button" className="-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden absolute right-0" onClick={() => setOpener(!opener)}>
              <span className="sr-only">Open navigation</span><svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900"><path d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5" fill="none" strokeWidth="1.5" strokeLinecap="round"></path></svg></button>
            <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
              <Link to='/docs?section=start' className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-primary text-white hover:bg-accent -my-2.5 animate ease-in-out duration-150" ><span>How to start <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>

  )
}

export default Navbar