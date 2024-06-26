import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import userContext from "../../context/UserContext";


const SearchItem = ({ user }) => {
    const navigate = useNavigate();
    const context = useContext(userContext);
    const { setUsers, dark } = context;
    return (
        <tr className={`border-b ${dark === 1 ? "border-primary-dark/60 text-text-dark" : "border-primary/60 text-text"}  font-inter`}>
            <td className="py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 text-opacity-100 px-6 flex justify-start items-start gap-3">
                <div className={`w-[2rem] rounded-full ${dark === 1 ? "bg-primary-dark/40" : "bg-primary/40"} flex justify-center items-center`}>
                    <img className="w-[2rem] rounded-full object-contain" src={user.image} alt="user image" />
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <p className='font-semibold'>{user.firstName} {user.lastName}</p>
                    <p className='text-[0.8rem] mt-[-0.2rem]'>{user.username}</p>
                </div>
            </td>
            <td className="hidden sm:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-light text-opacity-100 px-6">
                <div className='flex flex-col justify-start items-start'>
                    <p className='font-semibold'>{user.company.name}</p>
                    <p className='text-[0.8rem] mt-[-0.2rem]'>{`${user.company.address.city} ${user.company.address.state}`}</p>
                </div>
            </td>
            <td className="hidden sm:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-light text-opacity-100 px-6">
                {user.email}
            </td>
            <td className="hidden lg:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-light text-opacity-100 px-6">
                {user.phone}
            </td>
            <td className="hidden lg:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-light text-opacity-100 px-6">
                {user.university}
            </td>
            <td className="hidden lg:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-light text-opacity-100 px-6">
                {user.birthDate}
            </td>
            <td className="hidden lg:table-cell  py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-light text-opacity-100 px-6">
                {user.age}
            </td>
            <td className="py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-bold font-mono  text-opacity-100 px-6">
                <button className="scale-95 hover:scale-100 transition duration-150 ease-in-out" onClick={() => {
                    setUsers({});
                    navigate(`/user/${user.username}`)
                }
                }>
                    View
                    <span aria-hidden="true" className="ml-1">
                        →
                    </span>
                </button>
            </td>
        </tr>
    )
}

export default SearchItem
