import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeroSection from "./../components/Home/HeroSection";
import UserState from "../context/UserState";
import UserContext from "../context/UserContext";
import SearchSection from "../components/Home/SearchSection";
import { MemoryRouter } from "react-router-dom";

test('renders Home\'s HeroSection component with text "NamoJson"', () => {
  render(
    <UserState>
      <HeroSection />
    </UserState>
  );

  const textElements = screen.getAllByText(/NamoJson/i);
  expect(textElements.length).toBeGreaterThan(0);
});

test('renders Home\'s SearchSection component with text "NamoJson"', () => {
  render(
    <UserState>
      <SearchSection />
    </UserState>
  );

  const textElements = screen.getAllByText(/NamoJson/i);
  expect(textElements.length).toBeGreaterThan(0);
});

const mockContextValue = {
  users: {},
  getallusers: jest.fn(),
  getsearch: jest.fn(),
  dark: 0,
};

test("Overlooking Loading State...", async () => {
  render(
    <UserContext.Provider value={mockContextValue}>
      <MemoryRouter>
        <SearchSection />
      </MemoryRouter>
    </UserContext.Provider>
  );

  // Verify loading state
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});
