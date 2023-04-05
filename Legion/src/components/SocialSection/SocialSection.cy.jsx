import React from 'react'
import SocialSection from './SocialSection'

describe('<SocialSection />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SocialSection />)
  })
})