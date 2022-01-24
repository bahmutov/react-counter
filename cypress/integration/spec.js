/// <reference types="cypress" />

import 'cypress-react-selector'

it('works', () => {
  cy.visit('/')
  cy.waitForReact(1000, '#root')
  cy.react('Example').should('be.visible').contains('[data-cy=count]', '0')
  cy.getReact('Example').getCurrentState().should('have.property', 'count', 0)
  cy.get('[data-cy=add]').click().click()
  cy.getReact('Example').getCurrentState().should('have.property', 'count', 2)
})
