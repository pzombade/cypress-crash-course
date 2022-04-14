/// <reference types="cypress" />

context("Test the habits", ()=>{

    beforeEach("Visit the /habits page", ()=>{
        cy.visit("/habits");
    });
    
    it("Verify the habits page elements", ()=>{
        cy.contains("Habit Checklist");
        cy.get("#habit-add-btn").should("exist");
    });

    it("Verify the Add a new habit modal", ()=>{
        cy.get("#habit-add-btn").click();
        cy.contains("Add a new habit");
        cy.get("input").type("Reading");
        cy.contains("Save Changes").click();
    });

    it("Verify the habit list", ()=>{
        cy.get("#habit-add-btn").click();
        cy.contains("Add a new habit");
        cy.get("input").type("Reading");
        cy.contains("Save Changes").click();
        cy.contains("Habit Checklist");
        // cy.contains("Reading").should("have.a.property")
        cy.contains("Reading").parent().get("img").should("have.attr","src","/static/media/close.fa7e5ead.svg");
        cy.contains("Reading").click();
        cy.contains("Reading").parent().get("img").should("have.attr","src","/static/media/check.9e8832df.svg");
    });

});