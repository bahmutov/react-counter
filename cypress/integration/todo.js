/// <reference types="cypress" />

describe(
  'TodoMVC',
  { baseUrl: 'https://todomvc-no-tests-vercel.vercel.app/' },
  () => {
    it('has three todos', () => {
      cy.visit('/')
      cy.get('.app')
        .getComponent()
        .its('state')
        .should('deep.equal', [
          // each hook returns its value
          [
            { text: 'Learn about React', isCompleted: false },
            { text: 'Meet friend for lunch', isCompleted: false },
            { text: 'Build really cool todo app', isCompleted: false },
          ],
        ])
      cy.get('.todo').eq(1).find('[data-cy=complete]').click()
      cy.get('.todo')
        .eq(1)
        .getComponent()
        .its('props')
        .then(console.log)
        .its('todo')
        .should('deep.include', {
          isCompleted: true,
        })

      // how to spy on a hook?
      cy.get('.todo').eq(1).getComponent().its('props.toggleTodo')

      // .then((props) => {
      //   cy.spy(props, 'toggleTodo').as('toggleTodo')
      // })
    })
  },
)
