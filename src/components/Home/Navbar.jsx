import React from 'react'
import logo from '../../assets/namoJson_logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // let navigate = useNavigate();

  return (
    <>
      <header className="relative z-40 w-full max-w-[90rem] flex-none text-sm font-semibold leading-6 text-text">
        <nav aria-label="Global" className="mx-auto max-w-container px-4 sm:px-6 lg:px-10">
          <div className="relative flex items-center py-[2.125rem]">
            <button className="flex-none"><span className="sr-only">NamoJson.</span>
              <img src={logo} alt="logo_here" className='w-[10rem]' />
            </button>
            <div className="ml-auto hidden lg:flex lg:items-center">
              <button className="ml-8" >Home</button>
              <button className="ml-8">Docs</button>
            </div>
            <button type="button" className="-my-1 ml-auto flex h-8 w-8 items-center justify-center rounded-lg lg:ml-8"><span className="sr-only">Search components</span>
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
              </svg>
            </button>
            <button type="button" className="-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden">
              <span className="sr-only">Open navigation</span><svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900"><path d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5" fill="none" strokeWidth="1.5" strokeLinecap="round"></path></svg></button>
            <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
              <button className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-primary text-white hover:bg-accent -my-2.5 animate ease-in-out duration-150" ><span>How to start <span aria-hidden="true">→</span></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>

  )
}

export default Navbar