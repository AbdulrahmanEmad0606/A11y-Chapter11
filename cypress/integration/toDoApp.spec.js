/// <reference types="cypress"/>
describe("To do Application",()=>{
    it("should log any accessibility failure",()=>{
        cy.visit("http://todomvc.com/examples/react");
        cy.injectAxe();
        cy.checkA11y();
    });
});