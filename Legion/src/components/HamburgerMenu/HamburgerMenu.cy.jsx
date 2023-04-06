import React from "react";
import HamburgerMenu from "./HamburgerMenu";

const mountHamburgerMenu = () => {
  cy.mount(<HamburgerMenu />);
};

describe("<HamburgerMenu />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mountHamburgerMenu();
  });

  it("should render HamburgerMenu with relevant content", () => {
    mountHamburgerMenu();
    cy.contains("Home").should("exist");
    cy.contains("Contact").should("exist");
  });
});
