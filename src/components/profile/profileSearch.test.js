import React from "react";
import ProfileSearch from "./ProfileSearch";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import ProfileContextProvider from "../../contexts/ProfileContext";

afterEach(cleanup);
render(
  <ProfileContextProvider value={null}>
    <ProfileSearch />
  </ProfileContextProvider>
);

const setup = () => {
  const input = render(
    <ProfileContextProvider value={null}>
      <ProfileSearch />
    </ProfileContextProvider>
  ).getAllByTestId("search_name");
  return {
    input,
  };
};

describe("Completely render <ProfileSearch />", () => {
  test("render the ProfileSearch component without crashing", () => {
    expect(screen.getAllByTestId("profile_search")).toHaveLength(1);
    expect(screen.getAllByTestId("search_name")).toHaveLength(1);
    expect(screen.getAllByTestId("search_tag")).toHaveLength(1);
  });
});
