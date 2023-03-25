import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import About from "./About";

const renderAbout = (open) => {
  render(<About open={open} />);
};

const open = true;

describe("About Test", () => {
  test("About should render with correct content", () => {
    renderAbout(open);
    const heading = screen.getByText("About");
    expect(heading).toBeInTheDocument();

    const content = screen.getByText(
      "An e-commerce website built by Stanley, this website has it's own backend built on Firestore."
    );
    expect(content).toBeInTheDocument();
  });
});
