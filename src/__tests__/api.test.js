import UserState from "../context/UserState";
import UserContext from "../context/UserContext";
import React from "react";
import { render, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

describe("UserState", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('populate "users" state on calling getallusers', async () => {
    const TestComponent = () => {
      const { users, getallusers } = React.useContext(UserContext);

      React.useEffect(() => {
        getallusers();
      }, [getallusers]);

      return <div data-testid="users">{JSON.stringify(users)}</div>;
    };

    const { getByTestId } = render(
      <UserState>
        <TestComponent />
      </UserState>
    );

    const usersElement = getByTestId("users");
    //Initial State of Users begin {}
    expect(usersElement.textContent).toBe("{}");

    //Overlooking the receviedUsers over getallusers
    await waitFor(() => {
      const receivedUsers = JSON.parse(usersElement.textContent).users;
        const terryUser = receivedUsers.find(
          (user) => user.firstName === "Terry"
        );
        expect(terryUser).toBeDefined();
      });
  });

  it('returning a user named Johnathon when searching for "john"', async () => {
    const TestComponent = () => {
      const { users, getsearch } = React.useContext(UserContext);

      React.useEffect(() => {
        getsearch({ search: "john" });
      }, [getsearch]);

      return <div data-testid="users">{JSON.stringify(users)}</div>;
    };

    const { getByTestId } = render(
      <UserState>
        <TestComponent />
      </UserState>
    );

    const usersElement = getByTestId("users");
    //Initial State of Users begin {}
    expect(usersElement.textContent).toBe("{}");

    //Overlooking the receviedUsers over getallusers
    await waitFor(() => {
      const receivedUsers = JSON.parse(usersElement.textContent).users;
      const johnathonUser = receivedUsers.find(
        (user) => user.firstName === "Johnathon"
      );
      expect(johnathonUser).toBeDefined();
    });
  });
});
