import React from "react";
import { screen, render } from "@testing-library/react";

import HamburgerMenu from "./HamburgerMenu";

const renderHamburgerMenu = () => {
  render(<HamburgerMenu />);
};

describe("HamburgerMenu Test", () => {
  test("HamburgerMenu should render with correct content", () => {
    renderHamburgerMenu();
    const link = screen.getAllByRole("link");
    expect(link.length).toBe(2);
  });
});
