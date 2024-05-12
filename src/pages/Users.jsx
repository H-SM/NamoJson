import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Global/Navbar';
import Footer from '../components/Global/Footer';
import userContext from "./../context/UserContext";

const Users = () => {
    const navigate = useNavigate();
    const { username } = useParams();

    const context = useContext(userContext);
    const { users, getsearch } = context;
    const [user, setUser] = useState({});
    useEffect(() => {
        getsearch({
            search: username
        });

    }, [username]);

    useEffect(() => {
        if (users && users.users && users.users.length > 0) {
            setUser(users.users[0]);
        }
    }, [users])

    return (
        <div className='flex flex-col items-center'>
            <Navbar />
            <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-[90%] rounded-xl mt-[10vh] ring-1 ring-primary/50 mb-[10rem]">
                <div className="px-6">

                    <div className="flex flex-wrap justify-center">
                        <div className="w-full flex justify-center">
                            <div className="relative">
                                {user?.image ?
                                    <img src={user?.image} className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px] bg-white" alt='pfp' />
                                    :
                                    <></>}
                            </div>
                        </div>

                        <div className="w-full text-center mt-20">
                            <div className="text-center mt-2">
                                <h3 className="text-2xl text-text font-bold leading-normal mb-1">{user.firstName} {user.lastName}</h3>
                                <div className="text-xs mt-0 mb-2 text-text/80 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-text/80 opacity-75"></i>{user.email}
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center lg:pt-4 pt-8 pb-0 gap-2">
                                <div className="p-3 text-center">
                                    <span className="text-2xl font-bold block uppercase tracking-wide text-text">{user.bloodGroup}</span>
                                    <span className="text-md text-text/80">BloodGroup</span>
                                </div>
                                <div className="p-3 text-center">
                                    <span className="text-2xl font-bold block uppercase tracking-wide text-text">{user.maidenName}</span>
                                    <span className="text-md text-text/80">Maiden Name</span>
                                </div>
                                <div className="hidden md:flex flex-col p-3 text-center">
                                    <span className="text-2xl font-bold block uppercase tracking-wide text-text">{user.weight}</span>
                                    <span className="text-md text-text/80">Weight</span>
                                </div>
                                <div className="hidden md:flex flex-col p-3 text-center">
                                    <span className="text-2xl font-bold block uppercase tracking-wide text-text">{user.height}</span>
                                    <span className="text-md text-text/80">Height</span>
                                </div>
                                <div className="p-3 text-center">
                                    <span className="text-2xl font-bold block uppercase tracking-wide text-text">{user.gender}</span>
                                    <span className="text-md text-text/80">Gender</span>
                                </div>

                                {/* <div className="p-3 text-center">
                      <span className="text-2xl font-bold block uppercase tracking-wide text-text">{userData.graphs}</span>
                          <span className="text-md text-text/80">Total Graphs</span>
                      </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 py-6 border-t border-slate-200  text-center ">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4">
                                <button className="underline text-text hover:text-black transition duration-150 ease-in-out ml-5" onClick={() => navigate("/")}>
                                    Home
                                    <span aria-hidden="true" >
                                        →
                                    </span>
                                </button>
                                <button className="underline text-text hover:text-black transition duration-150 ease-in-out ml-5" onClick={() => navigate(`/docs`)}>
                                    Documentation
                                    <span aria-hidden="true" >
                                        →
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Users
