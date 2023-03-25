import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SocialSection from "./SocialSection";

// Mock the IntersectionObserver API
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

const renderSocialSection = () => {
  render(<SocialSection />);
};

describe("SocialSection Test", () => {
  test("SocialSection should render with correct content", () => {
    renderSocialSection();
    const title = screen.getByText("Join the Legion.");
    expect(title).toBeInTheDocument();
  });
});
