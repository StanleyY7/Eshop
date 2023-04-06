import React from "react";
import FavouritedCard from "./FavouritedCard";

describe("<FavouritedCard />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FavouritedCard />);
  });
  it("renders with relevant content", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FavouritedCard />);
    cy.get('[role="wrapper"]').should("exist");
  });
});
