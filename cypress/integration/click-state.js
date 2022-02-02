/// <reference types="cypress" />

// see video "A Little Taste Of React App Actions"
// https://youtu.be/7tzstwfuA6g
it('increments a counter', () => {
  cy.visit('/')
  cy.get('.Example').within(() => {
    cy.contains('Click me').click().click()
    cy.contains('[data-cy=count]', '2')
  })

  cy.get('.Example')
    .getComponent()
    .its('state')
    .should('deep.equal', { count: 2 })
  cy.get('.Example')
    .getComponent()
    .its('props')
    .should('have.property', 'initialCount', 0)

  cy.get('.Example')
    .getComponent()
    .then((comp) => {
      cy.spy(comp, 'setState').as('setState')
    })
  cy.contains('.Example button', 'Double me').click()
  cy.get('@setState').should('have.been.calledOnceWith', { count: 4 })
})
