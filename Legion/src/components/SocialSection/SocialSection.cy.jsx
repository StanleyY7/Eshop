import React from "react";
import SocialSection from "./SocialSection";

const mountSocialSection = () => {
  cy.mount(<SocialSection />);
};

describe("<SocialSection />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mountSocialSection();
  });

  it("should render with relevant content", () => {
    mountSocialSection();
    cy.contains("Join the Legion.").should("exist");
    cy.contains("And become a legionnaire by following our socials:").should(
      "exist"
    );
    cy.get("img").should("have.length", 5);
  });
});
