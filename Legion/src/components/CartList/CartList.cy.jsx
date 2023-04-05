import React from 'react'
import CartList from './CartList'

describe('<CartList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CartList />)
  })
})