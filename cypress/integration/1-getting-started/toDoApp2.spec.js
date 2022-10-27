/// <reference types="cypress"/>
describe("To do Application",()=>{
    it("should log any accessibility failure",()=>{
        cy.visit("http://todomvc.com/examples/react");
        cy.injectAxe();
        cy.checkA11y();
    });
    // it('should exclude spacific elements in the page',()=>{
    //     cy.visit("http://todomvc.com/examples/react");
    //     cy.injectAxe();
    //     cy.checkA11y({exclude:['.learn']});
    // });
    // it('should only test a spacific element in the page',()=>{
    //     cy.visit("http://todomvc.com/examples/react");
    //     cy.injectAxe();
    //     cy.checkA11y('.learn');
    // });
});