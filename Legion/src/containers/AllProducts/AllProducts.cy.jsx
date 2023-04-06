import React from "react";
import AllProducts from "./AllProducts";

const mountAllProducts = () => {
  cy.mount(<AllProducts />);
};

describe("<AllProducts />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mountAllProducts();
  });

  it("should render with relevant content", () => {
    mountAllProducts();
    cy.get('[role="container"]').should("exist");
    cy.get('[role="socialContainer"]').should("exist");
  });
});
