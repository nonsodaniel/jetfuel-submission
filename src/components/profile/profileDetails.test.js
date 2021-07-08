import React from "react";
import ProfileDetails from "./ProfileDetails";
import { render, cleanup, screen } from "@testing-library/react";
import ProfileContextProvider from "../../contexts/ProfileContext";

afterEach(cleanup);
render(
  <ProfileContextProvider value={null}>
    <ProfileDetails />
  </ProfileContextProvider>
);

describe("Completely render <ProfileDetails />", () => {
  test("render the ProfileDetails component without crashing", () => {
    expect(screen.getAllByTestId("profile_details")).toHaveLength(1);
  });
});
