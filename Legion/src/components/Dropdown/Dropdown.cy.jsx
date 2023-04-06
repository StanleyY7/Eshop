import React from "react";
import Dropdown from "./Dropdown";

const mountDropdown = () => {
  cy.mount(<Dropdown />);
};

describe("<Dropdown />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mountDropdown();
  });

  it("should render with relevant content", () => {
    // see: https://on.cypress.io/mounting-react
    mountDropdown();
    cy.contains("Size:").should("exist");
  });
});
