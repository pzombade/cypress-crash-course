/// <reference types="cypress" />

describe('habit dashboard', () => {
    beforeEach(() => {
        cy.visit('/habits');
    });

    it('should display modal when add button is clicked', () => {
        cy.get('#habit-add-btn').should('contain.text', "Add").click();
        cy.contains('Add a new habit').should('be.visible');
    });

    it('should displayhabit card whe a new habit is added', () => {
        const testStr = 'Drink a cup of water';
        cy.get('#habit-add-btn').click();
        cy.get('.form-control')
            .should('have.attr', 'placeholder', 'Habit')
            .type(testStr)
        cy.get('.btn-primary')
            .should('contain.text', "Save Changes")
            .click()
        cy.contains(testStr)
            .and('have.class', 'HabitCard__habit-container')
    });

    it('should toggle icon when habit card is clicked', () => {
        const testStr = 'Eat vegetables';
        const incompleteIcon = '/static/media/close.fa7e5ead.svg';
        const completedIcon = '/static/media/check.9e8832df.svg';
        cy.get('#habit-add-btn').click();
        cy.get('.form-control').type(testStr)
        cy.get('.btn-primary').click()
        cy.get('img.HabitCard__completion-icon')
            .last()
            .as('statusIcon')
            .should('have.attr', 'src', incompleteIcon)
            .and('be.visible')
        cy.contains(testStr).click();
        cy.get('@statusIcon')
            .last()
            .should('have.attr', 'src', completedIcon)
    });
});