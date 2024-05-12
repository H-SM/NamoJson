import React, { useState } from "react";
import UserContext from "./UserContext";
const UserState = (props) => {
  const [users, setUsers] = useState({});

  const getallusers = async () => {
    const response = await fetch(`https://dummyjson.com/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);
    setUsers(json);
  };

  const getsearch = async ({ search }) => {
    const response = await fetch(`https://dummyjson.com/users/search?q=${search}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);
    setUsers(json);
  };
  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        getallusers,
        getsearch,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
    