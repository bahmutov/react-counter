/// <reference types="cypress" />

import 'cypress-react-selector'

it('works', () => {
  cy.visit('/')
  cy.waitForReact(1000, '#root')
  // cy.react('Example').should('be.visible').contains('[data-cy=count]', '0')
  cy.getReact('Example').getCurrentState().should('have.property', 'count', 0)
  cy.get('[data-cy=add]').click().click()
  cy.getReact('Example').getCurrentState().should('have.property', 'count', 2)
  cy.getReact('Example').getProps().should('have.property', 'initialCount', 0)
})

// https://stackoverflow.com/questions/29321742/react-getting-a-component-from-a-dom-element-for-debugging/39165137#39165137
function getReactFiber(el) {
  const key = Object.keys(el).find((key) => {
    return (
      key.startsWith('__reactFiber$') || // react 17+
      key.startsWith('__reactInternalInstance$')
    ) // react <17
  })
  if (!key) {
    return
  }
  return el[key]
}

// react 16+
const GetCompFiber = (fiber) => {
  //return fiber._debugOwner; // this also works, but is __DEV__ only
  let parentFiber = fiber.return
  while (typeof parentFiber.type == 'string') {
    parentFiber = parentFiber.return
  }
  return parentFiber
}

it('sets state', () => {
  cy.visit('/')
  cy.waitForReact(1000, '#root')
  cy.getReact('Example').then((e) => {
    console.log(e)
    const fiber = getReactFiber(e[0].node)
    console.log(fiber)
    const compFiber = GetCompFiber(fiber)
    console.log('compFiber', compFiber)
    compFiber.stateNode.setState({ count: 10 })
  })

  cy.contains('[data-cy=count]', '10').should('be.visible')
})

it('calls the components method', () => {
  cy.visit('/')
  cy.waitForReact(1000, '#root')
  cy.get('[data-cy=add]').click().click().click()
  cy.getReact('Example').then((e) => {
    console.log(e)
    const fiber = getReactFiber(e[0].node)
    console.log(fiber)
    const compFiber = GetCompFiber(fiber)
    console.log('compFiber', compFiber)
    compFiber.stateNode.double()
  })

  cy.contains('[data-cy=count]', '6').should('be.visible')
})
