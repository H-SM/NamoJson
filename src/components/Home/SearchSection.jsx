import React, { useContext, useEffect, useMemo, useState } from "react";
// import graphContext from "../context/Graph/graphContext.js";

import SearchItem from "./searchItem";
import userContext from "../../context/UserContext";
import spinner from "../../assets/spinner.svg";

const SearchSection = () => {
  const [active, setActive] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 7;

  const context = useContext(userContext);
  const { users, getallusers, getsearch } = context;

  useMemo(() => {
    if (users.total == null) {
      getallusers();
    }
    console.log(users.total == null);
  }, [users.total, getallusers]);

  useEffect(() => {
    if (search.trim() !== "") {
      const searcher = setTimeout(() => {
        getsearch({
          search: search
        });
      }, 500);

      return () => clearTimeout(searcher);
    }else if(search.trim() === ""){
      getallusers();
    }
  }, [search])


  let totalPages = Math.max(Math.ceil(users.limit / itemsPerPage), 1);
  //prevent overflow on searching
  setTimeout(() => {
    if (active > totalPages) setActive(totalPages);
  }, 1000);

  const next = () => {
    if (active === totalPages) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  const startIndex = (active - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return (
    <>
      <div id="history"
        className="relative z-20 mx-auto px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8"
      >
        <div className="mx-auto max-w-[45rem] text-center font-inter text-text">
          <h1 className=" font-extrabold text-[2.7rem] md:text-[3rem] lg:text-[4rem]">
            <span className='text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text'>Discover</span> users.
          </h1>
          <p className="mt-4 text-[0.8rem] md:text-[1rem]">
            <i>Explore your journey through captivating user details!</i> Imagine yourself embarking on an exciting journey through the world of <b>NamoJson</b>, it offers a captivating journey through user details, providing a comprehensive view of user identities.
          </p>
        </div>
      </div>

      {users.limit == null ? (
        // loader here 
        <div className="font-inter text-text font-bold flex flex-col justify-center items-center w-[90%] max-w-[70rem] min-h-[50rem]">
          <img src={spinner} alt="spinner" />
          <p className="text-[1.4rem]">Loading...</p>
        </div>
      ) : (
        <>
          <div className="w-[90%] max-w-[70rem]">
            <div className="flex flex-col mt-8 w-[full]">
              <div className="flex w-full justify-end">
                <div className="block relative w-fit">
                  <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current text-text"
                    >
                      <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                    </svg>
                  </span>
                  <input
                    placeholder="Search (Name)"
                    className="rounded-md border border-primary border-b block pl-8 pr-6 py-2 w-full outline-none  text-sm focus:ring-0 focus:ring-offset-0"
                    onChange={(e) => {
                      e.preventDefault();
                      setSearch(e.target.value);
                      console.log(search);
                    }}
                  />
                </div>
              </div>
              <div className="overflow-x-auto h-fit sm:min-h-[20rem] lg:min-h-[40rem] flex-row justify-center items-center gap-y-3">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-primary">
                    <tr>
                      <th
                        scope="col"
                        className="py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-bold text-opacity-100 text-text px-6"
                      >
                        User
                      </th>
                      <th
                        scope="col"
                        className="hidden sm:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-bold text-opacity-100 text-text px-6"
                      >
                        Company
                      </th>
                      <th
                        scope="col"
                        className="hidden sm:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-bold text-opacity-100 text-text px-6"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="hidden lg:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-bold text-opacity-100 text-text px-6"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="hidden lg:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-bold text-opacity-100 text-text px-6"
                      >
                        University
                      </th>
                      <th
                        scope="col"
                        className="hidden lg:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-bold text-opacity-100 text-text px-6"
                      >
                        <p>BirthDate</p>
                      </th>
                      <th
                        scope="col"
                        className="hidden lg:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-bold text-opacity-100 text-text px-6"
                      >
                        <p>Age</p>
                      </th>
                      <th
                        scope="col"
                        className="py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-bold text-opacity-100 text-sky-500 px-6"
                      >
                        <p className="hidden">Visit</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.users
                      .map((user, index) => (
                        <SearchItem user={user} key={index} />
                      ))
                      .slice(startIndex, endIndex)
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1 w-full mt-3">
              <button className="w-fit disabled:opacity-45"
                onClick={prev}
                disabled={active === 1}
              >
                <svg viewBox="0 0 24 24" className="w-5" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </button>
              <div className="font-normal">
                Page <strong className="text-gray-900">{active}</strong> /{" "}
                <strong className="text-gray-900">{totalPages}</strong>
              </div>
              <button className="w-fit disabled:opacity-45"
                onClick={next}
                disabled={active === totalPages}
              >
                <svg viewBox="0 0 24 24" className="w-5" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </button>
            </div>
          )}
          <div>
          </div>
        </>
      )}
    </>
  )
}

export default SearchSection
