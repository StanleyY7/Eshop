import React from 'react'
import CartPage from './CartPage'

describe('<CartPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CartPage />)
  })
})