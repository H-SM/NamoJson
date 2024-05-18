// Original import with potential unused imports
import {
  configure,
  fireEvent,
  logRoles,
  render,
  screen,
  within,
} from "@testing-library/react";
import Home from "../pages/Home";
// import renderer, { act } from 'react-test-renderer';
import userEvent from "@testing-library/user-event";
import UserContext from "../context/UserContext";

test("Test 1 - Home rendering", () => {
  const contextValue = { dark: 0, setDark: jest.fn() };

  render(
    <UserContext.Provider value={contextValue}>
      <Home />
    </UserContext.Provider>
  );
  const linkElement = screen.getByText(/Namojson./i);
  expect(linkElement).toBeInTheDocument();
});
