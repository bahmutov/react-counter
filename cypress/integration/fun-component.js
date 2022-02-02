/// <reference types="cypress" />

it('can access functional component (experimental)', () => {
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
  cy.get('.fun-counter')
    .getComponent()
    .then((comp) => {
      comp.memoizedState.queue.dispatch(20)
    })
  // the component re-renders
  cy.contains('.fun-counter [data-cy=count]', '20').should('be.visible')
  // how to get the updated state?
  // cy.get('.fun-counter')
  //   .getComponent()
  //   .then(console.log)
  //   .its('state')
  //   .should('deep.equal', [20, 22])
  // if we go through the UI, then the internal state is updated
  cy.get('.fun-counter [data-cy=add]').click()
  cy.contains('.fun-counter [data-cy=count]', '21').should('be.visible')
  cy.get('.fun-counter')
    .getComponent()
    .its('state')
    .should('deep.equal', [21, 24])
})

it.skip('can get the hook variable name (really really experimental)', () => {
  cy.visit('/')

  cy.log('**initial state**')
  cy.get('.fun-counter').getComponent().then(console.log)
})
