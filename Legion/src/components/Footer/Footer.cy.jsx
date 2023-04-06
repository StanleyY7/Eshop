import React from "react";
import Footer from "./Footer";

const mountFooter = () => {
  cy.mount(<Footer />);
};

describe("Footer Test in Cypress", () => {
  it("should render Footer", () => {
    mountFooter();
  });
  it("should render Footer with relevant content", () => {
    mountFooter();
    cy.get('[role="logo"]').should("exist");
  });
});
