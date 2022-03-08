/// <reference types="cypress" />

describe('The Acommplishments page', () => {
    beforeEach(() => {
        cy.visit('/accomplishments');
    });

    it('should showcase error if an incomplete form is submitted', () => {
        cy.getByTestId('accomplishment-title-input').type('My Basketball Accomplishments')
        cy.getByTestId('accomplishment-input').type("I made 10 threes in a row")
        cy.contains('Submit Accomplishment').click()
        cy.get('.Accomplishment-error-container > p')
            .should('contain.text', 'Complete the items above to continue')
            .and('be.visible')
    });

    it('submits a completed form and displays the success page', () => {
        cy.getByTestId('accomplishment-title-input').type('My Basketball Accomplishments')
        cy.getByTestId('accomplishment-input').type("I made 10 threes in a row")
        cy.get('[data-cy=accomplishment-checkbox]').check()
        cy.contains('Submit Accomplishment').click()
        cy.get('.Accomplishment-img')
            .should('have.attr', 'src', '/static/media/confetti.36cf59bd.svg')
        cy.contains('This Accomplisment was Successfully Submitted')
            .should('be.visible')
    });

    it('submits an accomplishment and returns to the form', () => {
        cy.getByTestId('accomplishment-title-input').type('My Basketball Accomplishments')
        cy.getByTestId('accomplishment-input').type("I made 10 threes in a row")
        cy.get('[data-cy=accomplishment-checkbox]').check()
        cy.contains('Submit Accomplishment').click()
        cy.get('.Accomplishment-btn').click()
        // check that we are back on the form and inputs are all reset
        cy.getByTestId('accomplishment-title-input').should('be.empty')
        cy.getByTestId('accomplishment-input').should('be.empty')
        cy.get('[data-cy=accomplishment-checkbox]').should('not.be.checked')
    });
});