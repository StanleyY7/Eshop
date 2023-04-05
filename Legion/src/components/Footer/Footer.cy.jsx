import React from "react";
import Footer from "./Footer";

describe("Footer Test in Cypress", () => {
  it("should render Footer", () => {
    cy.mount(<Footer />);
  });
});
