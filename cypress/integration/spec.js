/// <reference types="cypress" />

import 'cypress-react-selector'
import { getReactFiber, getComponent } from '../support/utils'

it('works', () => {
  cy.visit('/')
  cy.waitForReact(1000, '#root')
  cy.get('.Example').within(() => {
    // cy.react('Example').should('be.visible').contains('[data-cy=count]', '0')
    cy.getReact('Example').getCurrentState().should('have.property', 'count', 0)
    cy.get('[data-cy=add]').click().click()
    cy.getReact('Example').getCurrentState().should('have.property', 'count', 2)
    cy.getReact('Example').getProps().should('have.property', 'initialCount', 0)
  })
})

it('sets state', () => {
  cy.visit('/')
  cy.waitForReact(1000, '#root')
  cy.getReact('Example').then((e) => {
    console.log(e)
    const fiber = getReactFiber(e[0].node)
    console.log(fiber)
    const compFiber = getComponent(fiber)
    console.log('compFiber', compFiber)
    compFiber.stateNode.setState({ count: 10 })
  })

  cy.contains('[data-cy=count]', '10').should('be.visible')
})

it('calls the components method', () => {
  cy.visit('/')
  cy.waitForReact(1000, '#root')
  cy.get('.Example').within(() => {
    cy.get('[data-cy=add]').click().click().click()
    cy.getReact('Example').then((e) => {
      console.log(e)
      const fiber = getReactFiber(e[0].node)
      console.log(fiber)
      const compFiber = getComponent(fiber)
      console.log('compFiber', compFiber)
      cy.log('calling **double()**')
      compFiber.stateNode.double()
    })

    cy.contains('[data-cy=count]', '6').should('be.visible')
  })
})
