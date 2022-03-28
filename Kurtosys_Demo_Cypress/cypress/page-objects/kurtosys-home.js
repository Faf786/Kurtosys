/// <reference types="cypress"/>

export class KurtosysHome{
    navigateToResources(){
        
        cy.visit('https://www.kurtosys.com')
        
        cy.get('cy.get(\'.menu-header-menu-container > .kurtosys-menu-container > .kurtosys-mobile-menu-toggle-button > .kurtosys-menu-toggle__icon\)').click


    }
}