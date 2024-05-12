import React, { useState } from "react";
import UserContext from "./UserContext";
const UserState = (props) => {
  const [users, setUsers] = useState({});

  const getallusers = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const json = await response.json();
      setUsers(json);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const getsearch = async ({ search }) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${search}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to search users");
      }

      const json = await response.json();
      setUsers(json);
    } catch (error) {
      console.error("Error searching users:", error);
    }
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
