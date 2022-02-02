/// <reference types="cypress" />

import 'cypress-react-selector'

it('checks the state', () => {
  cy.visit('/')
  cy.get('.Example').within(() => {
    cy.contains('[data-cy=count]', '0')
    cy.get('[data-cy=add]').click().click().click()
    cy.contains('[data-cy=count]', '3')

    // find the React component
    cy.waitForReact(1000, '#root')

    // equivalent
    cy.getReact('Example').getCurrentState().should('have.property', 'count', 3)
    cy.getReact('Example').getCurrentState().should('deep.include', {
      count: 3,
    })
    cy.getReact('Example', { state: { count: 3 } })
  })
})
