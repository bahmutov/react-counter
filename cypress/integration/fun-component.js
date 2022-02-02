/// <reference types="cypress" />

it('can access functional component (experiment)', () => {
  cy.visit('/')

  cy.log('**initial state**')
  cy.get('.fun-counter')
    .getComponent()
    .its('state')
    .should('deep.equal', [7, 14])

  cy.get('.fun-counter').within(() => {
    cy.contains('[data-cy=count]', '7')
    cy.get('[data-cy=add]').click().click()
    cy.contains('[data-cy=count]', '9')
  })

  cy.get('.fun-counter').getComponent().its('props').should('deep.equal', {
    initialCount: 7,
    something: 'else',
  })

  // check the hook names used in the component
  // expect(comp._debugHookTypes).to.deep.equal(['useState', 'useState'])

  cy.get('.fun-counter [data-cy=add]').click().click()
  cy.get('.fun-counter')
    .getComponent()
    .its('state')
    .should('deep.equal', [11, 22])

  // can we trigger the hooks?
})
