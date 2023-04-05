import React from 'react'
import Cover from './Cover'

describe('<Cover />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Cover />)
  })
})