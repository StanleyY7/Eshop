import React from "react";
import TrendingCarousel from "./TrendingCarousel";

const mountTendingCarousel = () => {
  cy.mount(<TrendingCarousel />);
};

describe("<TrendingCarousel />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mountTendingCarousel();
  });
  it("should render with relevant content", () => {
    mountTendingCarousel();
    cy.contains("Trending Styles").should("exist");
    cy.get("button").should("have.length", 2);
  });
});
