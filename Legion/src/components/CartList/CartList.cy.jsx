import React from "react";
import CartList from "./CartList";

const mountCartList = () => {
  cy.mount(<CartList />);
};

describe("<CartList />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mountCartList();
  });

  it("should render with correct content when !cartData", () => {
    mountCartList();
    cy.contains("Checkout").should("exist");
    cy.contains("Total Price: $0, get shopping!").should("exist");
  });
});
