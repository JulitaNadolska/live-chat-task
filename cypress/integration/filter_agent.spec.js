describe('Filtering using date', function () {
    it('should be able to log in to the app', function () {
        cy.visit('https://my.labs.livechatinc.com');
        cy.get('#email').click().type(Cypress.env('username'))
        cy.get('#password').click().type(Cypress.env('password'))
        cy.get('button').contains('Sign in').click();
        cy.get('h1').should('be.visible').contains('AgentTestowy')
        cy.url().should('include', '/home')
    })

    it('should be able to go to Archives tab', function () {
        cy.get('li').contains('Archives').click()
        cy.url().should('include', '/archives')
    })

    it('should be able to see filters options', function(){
        cy.get('div').contains('filter').click()
        cy.get('[data-testid="list-container"]').should('be.visible').contains('Add filter')

    })

    it('should be able to choose agent', function(){
        cy.get('[data-testid="list-container"]').within(() => {
        cy.contains('Agent').parent().contains('Choose...').click();
        cy.contains('AgentTestowy').click();
        cy.get('button').contains('Show').click();
        cy.url().should('include', 'agent[]=m.debski%2Bfrontend_tests%40livechatinc.com')
        cy.contains('Agent').parent().contains('AgentTestowy')
        cy.contains('Filters (1)')   
        })

    })
})
