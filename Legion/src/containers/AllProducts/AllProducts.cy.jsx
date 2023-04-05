import React from 'react'
import AllProducts from './AllProducts'

describe('<AllProducts />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AllProducts />)
  })
})