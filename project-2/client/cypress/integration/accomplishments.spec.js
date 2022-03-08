/// <reference types="cypress" />
describe('Accomplishmanets Dashboard', () => {
    beforeEach(() => {
        cy.visit('/accomplishments');
    });

    it('should display inappropriate words error (Client & Server Test)', () => {
        cy.get('[data-cy="accomplishment-title-input"]').type("This is my accomplishment");
        cy.get('[data-cy=accomplishment-input]').type("I petted a giraffe");
        cy.get('[data-cy=accomplishment-checkbox]').check();
        cy.get('button').click();
        cy.get('.Accomplishment-error-container > p')
            .contains('Your content is not appropriate')
            .should('be.visible')
    });

    it('should display inappropriate words error (Mocked Data Test)', () => {
        cy.intercept('POST', 'http://localhost:4000', (req) => {
            req.reply((res) => {
                res.send({ msg: 'Your content is not appropriate' })
            })
        });
        cy.get('[data-cy="accomplishment-title-input"]').type("This is my accomplishment");
        cy.get('[data-cy=accomplishment-input]').type("I petted a giraffe");
        cy.get('[data-cy=accomplishment-checkbox]').check();
        cy.get('button').click();
        cy.get('.Accomplishment-error-container > p')
            .contains('Your content is not appropriate')
            .should('be.visible')
    });
});