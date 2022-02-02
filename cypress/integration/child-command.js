/// <reference types="cypress" />

it('checks and modifies state', () => {
  cy.visit('/')
  cy.get('.Example').within(() => {
    cy.contains('[data-cy=count]', '0')
    cy.get('[data-cy=add]').click().click()
    cy.contains('[data-cy=count]', '2')
  })
  cy.get('.Example')
    .as('example')
    .getComponent()
    .its('state')
    .should('deep.include', { count: 2 })

  cy.get('@example').getComponent().invoke('double')
  cy.contains('.Example [data-cy=count]', '4')
  cy.get('@example').getComponent().invoke('double')
  cy.contains('.Example [data-cy=count]', '8')

  cy.log('**call setState**')
  // set the application into the state that is normally impossible
  // to reach by just using the page interactions
  cy.get('@example').getComponent().invoke('setState', { count: -99 })
  cy.contains('.Example [data-cy=count]', '-99')
})

it('spies on setState', () => {
  cy.visit('/')
  cy.contains('.Example [data-cy=count]', '0')
  cy.get('.Example')
    .getComponent()
    .then((component) => {
      cy.spy(component, 'setState').as('setState')
    })
  cy.get('.Example [data-cy=add]').click()
  cy.get('@setState')
    .should('be.calledOnceWithExactly', { count: 1 })
    .invoke('resetHistory')
  cy.get('.Example [data-cy=add]').click()
  cy.get('@setState').should('be.calledOnceWithExactly', { count: 2 })
})
