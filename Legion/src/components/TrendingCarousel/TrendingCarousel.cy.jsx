import React from 'react'
import TrendingCarousel from './TrendingCarousel'

describe('<TrendingCarousel />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TrendingCarousel />)
  })
})