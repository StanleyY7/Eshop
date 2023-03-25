import { screen, render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import Cover from "./Cover";

const renderCover = () => {
  render(<Cover />);
};

describe("Cover test", () => {
  test("Should render component with content", () => {
    renderCover();
    const slideshow = screen.getByRole("slideshow");
    expect(slideshow).toBeInTheDocument();
  });
});
