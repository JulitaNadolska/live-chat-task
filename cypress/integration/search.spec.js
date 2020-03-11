describe('Searching for chats', function () {
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

    it('should be able to search', function (){
        cy.get('[data-testid="list-container"]').within(() => {
            cy.get('input').type('yeet')
            cy.wait(2500)
        cy.url().should('include', '=yeet')
        })
        
    })

})