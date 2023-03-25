import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import Footer from "./Footer";

const renderFooter = () => {
  render(<Footer />);
};

describe("Footer Test", () => {
  test("Footer should render with logo", () => {
    renderFooter();
    const logo = screen.getByRole("logo");
    expect(logo).toBeInTheDocument();
  });
});
