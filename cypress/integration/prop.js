/// <reference types="cypress" />

import 'cypress-react-selector'

it('uses prop to find the component', () => {
  cy.visit('/')
  // find the React component
  cy.waitForReact(1000, '#root')
  cy.react('Example', { props: { initialCount: 0 } })
    .should('be.visible')
    .contains('button', 'Click me')
    .click()
    .click()
})
