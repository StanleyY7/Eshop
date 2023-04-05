import React from "react";
import About from "./About";

const mountAbout = (open) => {
  cy.mount(<About open={open} />);
};

const open = true;

describe("<About />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mountAbout(open);
  });

  it("contains relevant content", () => {
    mountAbout(open);
    cy.contains("About").should("exist");
    cy.contains(
      "An e-commerce website built by Stanley, this website has it's own backend built on Firestore."
    ).should("exist");
  });
});
