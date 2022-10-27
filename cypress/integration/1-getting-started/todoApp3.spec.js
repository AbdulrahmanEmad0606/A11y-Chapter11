/// <reference types="cypress"/>
describe("To do Application",()=>{
    it('should only include rules with serious and critical impacts', () => {
        cy.visit("http://todomvc.com/examples/react");
        cy.injectAxe();
        cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] });
      });   
      it('should exclude specific accessibility rules', () => {
        cy.checkA11y(null, {
          rules: {
            'color-contrast': { enabled: false },
          },
        });
    });
});