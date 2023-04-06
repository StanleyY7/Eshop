import React from "react";
import Cover from "./Cover";

const mountCover = () => {
  cy.mount(<Cover />);
};

describe("<Cover />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mountCover();
  });

  it("Should render cover with relevant content", () => {
    mountCover();
    cy.get('[role="slideshow"]').should("exist");
  });
});
