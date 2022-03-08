/// <reference types="cypress" />

describe('Locatrs', () => {
    beforeEach(() => {
        cy.visit('/elements');
    });

    it('locates elements with the get command', () => {
        // Get all buttons by HTML tag-name
        cy.get('button')

        // Get an element by it's id-prop
        cy.get('#btn-with-id')

        // Get all elements by class-name
        cy.get('.btn-with-class')

        // Get all elements by MULTIPLES class-names
        cy.get('.Elements-btn.btn-with-class')

        // Get all elements by attributes (EXACT MATCH) So even if another element has these classes,
        //  but additional classes it won't match. The attribute value must be exact.
        cy.get('[class="Elements-btn btn-with-class"]')

        // Get all elements with a certain type-property
        cy.get('[type="submit"]')

        // IN SHORT: cy.get() uses CSS SELECTTORS
        // So the same selectors-syntax you would use in your CSS/SASS and jQuery
        // (see: https://docs.cypress.io/api/commands/get)
        // Don't forget about cool options like:
        // - Find the elements with an attribute containing a word
        //     cy.get('a[href*="questions"]')
        // - Find elements with an attribute that starts with...
        //      cy.get('[id^=local-]')
        // - Find elements with an attribute that ends with...
        //      cy.get('[id$=-remote]')

        // Using a custom Cypress.Command (set up in the ./cypress/support/commands.js)
        cy.getByTestId('btn-id-1').should('have.class', 'Elements-btn')

    });

    it('locates elements with the contains command', () => {
        // Important to note that contains only locates ONE element.
        // If you have multiple elements with the same text it will only get the first occurance
        // (See: https://docs.cypress.io/api/commands/contains)

        // Get element by text
        cy.contains('Unique Text')

        // Get the first element of all the elements with the same text
        cy.contains('Not Unique Text')

        // Being more specific about which one of the elements with the same text we want fetched
        // This is done with the use of CSS SELECTORS, as is done with get()

        // Get the first element with a selector '[type="submit"]' and the text "Not Unique Text"
        cy.contains('[type="submit"]', 'Not Unique Text')
        // ALTERNATIVELY - combined with get
        cy.get('[type="submit"]').contains('Not Unique Text')
    });

    // Using Find to filter list of elements returned by get()
    it("locating elements with find", () => {
        cy.get("#form-1").find(".btn-1")
    })

    // Using Children to find the DIRECT children of an element
    it('locate all the child elements of a located element', () => {
        // Will yield only the direct LI-elements in the ul.secondary-nav
        cy.get('ul.secondary-nav').children()
        // Will yield only the direct LI-elements in the ul.tertiary-nav
        cy.get('ul.tertiary-nav').children()
    });

});

