/// <reference types="cypress" />

import { getReactFiber, getComponent } from './utils'

Cypress.Commands.add('getComponent', { prevSubject: 'element' }, ($el) => {
  const fiber = getReactFiber($el[0])
  if (!fiber) {
    throw new Error('Could not find React Fiber')
  }
  const component = getComponent(fiber)
  if (!component) {
    throw new Error('Could not find React Component')
  }

  if (component.stateNode) {
    // class component
    return component.stateNode
  }

  // functional component, collect the state and props
  const state = []

  let memoizedState = component.memoizedState
  while (memoizedState) {
    state.push(memoizedState.memoizedState)
    memoizedState = memoizedState.next
  }

  const props = component.memoizedProps

  return { ...component, state, props }
  // if (!component.stateNode) {
  //   throw new Error('Could not find React Component stateNode')
  // }
})
