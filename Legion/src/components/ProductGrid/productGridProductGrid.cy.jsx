import React from "react";
import ProductGrid from "./productGrid";

const mountProductGrid = () => {
  cy.mount(<ProductGrid />);
};

describe("<ProductGrid />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mountProductGrid();
  });
  it("should render with relevant content", () => {
    mountProductGrid();
    cy.contains("All Products").should("exist");
  });
});
