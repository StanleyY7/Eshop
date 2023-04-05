import React from 'react'
import ProductGrid from './productGrid'

describe('<ProductGrid />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProductGrid />)
  })
})