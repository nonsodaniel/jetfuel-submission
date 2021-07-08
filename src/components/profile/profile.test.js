import React from "react";
import Profile from "./Profile";
import { render, cleanup, screen } from "@testing-library/react";
import ProfileContextProvider from "../../contexts/ProfileContext";
afterEach(cleanup);
render(
  <ProfileContextProvider value={null}>
    <Profile />
  </ProfileContextProvider>
);

describe("Completely render <Profile />", () => {
  test("render the Profile component without crashing", () => {
    expect(screen.getAllByTestId("container")).toHaveLength(1);
  });
});
