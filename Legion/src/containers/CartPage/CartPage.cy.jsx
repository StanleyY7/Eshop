import React from "react";
import CartPage from "./CartPage";

const mountCartPage = () => {
  cy.mount(<CartPage />);
};

describe("<CartPage />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mountCartPage();
  });

  it("should render with relevant content", () => {
    mountCartPage();
    cy.get('[role="socialWrapper"]').should("exist");
  });
});
