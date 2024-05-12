import React from 'react'
import Navbar from '../components/Global/Navbar'
import Footer from '../components/Global/Footer'
import step1 from "./../assets/step1.png"
import step2 from "./../assets/step2.png"
import step3 from "./../assets/step3.png"
import step4 from "./../assets/step4.png"

const Docs = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <Navbar />
            <div className="isolate  px-6 py-24 sm:py-32 lg:px-8">


                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Documentation
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        get your details simply, hurdle-free!
                    </p>
                </div>

                <div className="flex justify-center items-center mt-9">
                    <section className="grid grid-cols-1 gap-x-8 gap-y-6 pb-20 xl:grid-cols-4">
                        <h2 className="text-3xl font-bold tracking-tight text-text">
                            Start Looking into it!
                        </h2>
                        <div className="col-span-3">
                            <div className="max-w-[54rem] text-lg leading-8 text-slate-600">
                                <p>
                                    Welcome to NamoJson, where the world of data meets tranquility in a captivating React web application. NamoJson is not just another data-browsing platform; it's an immersive experience designed to seamlessly connect users with a vast database, all while offering a serene, mellow interface that delights the senses.
                                </p>
                                <p className="mt-6">
                                    At its core, NamoJson is a user-centric platform that empowers individuals to effortlessly peruse through a diverse array of data stored in a database. Whether you're searching for specific users or simply exploring the rich tapestry of information, NamoJson provides an intuitive user interface that makes navigation a breeze.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="divide-y divide-slate-700/10 border-t border-slate-700/10 flex justify-center items-center mt-9">
                    <section
                        id="start"
                        className="grid grid-cols-1 gap-x-8 gap-y-6 pb-20 pt-10 xl:grid-cols-4 max-w-[80%] justify-center  "
                    >
                        <h3 className="text-2xl font-semibold leading-9 tracking-tight text-text">
                            How to Start?
                        </h3>
                        <div className="col-span-3">
                            <p className="max-w-3xl text-base leading-8 text-slate-700">
                                NamoJson is more than just a data-browsing platform; it's a testament to the seamless fusion of technology and tranquility. Our mission is simple: to empower individuals to explore and engage with data in a serene and intuitive manner.
                            </p>
                            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 text-sm leading-6 sm:grid-cols-2 lg:grid-cols-2">
                                <div>
                                    <div className="relative aspect-[3/2] object-contain overflow-hidden rounded-xl bg-slate-200 shadow-lg shadow-primary/30">
                                        <img className="w-full h-full object-cover" src={step1} alt="" />
                                        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary"></div>
                                    </div>
                                    <p className="mt-6 text-slate-700">
                                        <strong className="font-semibold text-text">
                                            Step 1
                                        </strong>{" "}
                                        – Go to the "Discover users" section over on the home page.
                                    </p>
                                </div>
                                <div>
                                    <div className="relative aspect-[3/2] object-contain overflow-hidden rounded-xl bg-slate-200 shadow-lg shadow-primary/30">
                                        <img className="w-full h-full object-cover" src={step2} alt="" />
                                        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary"></div>
                                    </div>
                                    <p className="mt-6 text-slate-700">
                                        <strong className="font-semibold text-text">
                                            Step 2
                                        </strong>{" "}
                                        – Search For a user (name/username) to get the user's detail searched up.
                                    </p>
                                </div>
                                <div>
                                    <div className="relative aspect-[3/2]   object-contain overflow-hidden rounded-xl bg-slate-200 shadow-lg shadow-primary/30">
                                        <img className="w-full h-full object-cover" src={step3} alt="" />
                                        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary"></div>
                                    </div>
                                    <p className="mt-6 text-slate-700">
                                        <strong className="font-semibold text-text">
                                            Step 3
                                        </strong>{" "}
                                        – Click on "View" to get more insights over the user.
                                    </p>
                                </div>
                                <div>
                                    <div className="relative aspect-[3/2]   object-contain overflow-hidden rounded-xl bg-slate-200 shadow-lg shadow-primary/30">
                                        <img className="w-full h-full object-cover" src={step4} alt="" />
                                        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary"></div>
                                    </div>
                                    <p className="mt-6 text-text">
                                        <strong className="font-semibold text-text">
                                            Step 4
                                        </strong>{" "}
                                        – get your details simply, hurdle-free!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="divide-y divide-slate-700/10 border-t border-slate-700/10 flex justify-center items-center mt-9">
                    <section
                        id="start"
                        className="grid grid-cols-1 gap-x-8 gap-y-6 pb-20 pt-10 xl:grid-cols-4 max-w-[80%] justify-center  "
                    >
                        <h3 className="text-2xl font-semibold leading-9 tracking-tight text-text">
                            Features
                        </h3>
                        <div className="col-span-3">

                            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-y-10">
                                <div>
                                    <p className="text-base leading-7 text-slate-700">
                                        <strong className="font-semibold text-text">
                                            User-Friendly Interface
                                        </strong>{" "}
                                        —{" "}
                                        <span>
                                            NamoJson is more than just a data-browsing platform; it's a testament to the seamless fusion of technology and tranquility. 
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base leading-7 text-slate-700">
                                        <strong className="font-semibold text-text">
                                            Shareable Profile
                                        </strong>{" "}
                                        —{" "}
                                        <span>
                                            Every User comes with a shareable link, enabling
                                            users to effortlessly share their profile with
                                            others.
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base leading-7 text-slate-700">
                                        <strong className="font-semibold text-text">
                                            Search Debouncing
                                        </strong>{" "}
                                        —{" "}
                                        <span>
                                            Ensures efficient search functionality by delaying API calls until the user stops typing.
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base leading-7 text-slate-700">
                                        <strong className="font-semibold text-text">
                                            Paging (of table content)
                                        </strong>{" "}
                                        —{" "}
                                        <span>
                                            Enables seamless navigation through large datasets by dividing content into manageable pages.
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base leading-7 text-slate-700">
                                        <strong className="font-semibold text-text">
                                            Simple UI
                                        </strong>{" "}
                                        —{" "}
                                        <span>
                                            Provides an intuitive and clutter-free interface for easy user interaction and navigation.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Docs
