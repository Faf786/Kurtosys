import data from '../fixtures/data.json';
/// <reference types="cypress"/>

describe('Kurtosys Demo', () => {
    it('Navigate to Kurtosys Home page',()=>{
        cy.viewport(1920, 1080)
        cy.visit('https://www.kurtosys.com')
        
    })

    it('Check if page loaded successfully', () => {
        cy.get('a > .attachment-full').should('be.visible')
    })
    
    it('Navigate to Resources',()=>{
        cy.get('#kurtosys-menu-item-59810 > .top-level-link > .kurtosys-menu-item-wrapper > .kurtosys-menu-title > .menu-image-title').trigger('mouseover')
        
    })

    it('Navigate to White papers',()=>{
        cy.get('#desktop-nav div.elementor-element.elementor-element-b3e68c4.elementor-align-left.elementor-icon-list--layout-traditional.elementor-widget.elementor-widget-icon-list > div > ul > li:nth-child(4) > a > span.elementor-icon-list-text').click()
        
       // cy.visit('https://www.kurtosys.com/white-papers/')
    })

    it('Verify page title',()=>{
        cy.title().should('eq','White Papers | Kurtosys')
    })

    it('Click on UCITS White Paper',()=>{
        cy.contains('UCITS White Paper').should('be.visible').click()
    })

    it('Enter subscriber details',()=>{
        cy.get('.elementor-widget-container > iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body')
    cy.wrap($body)
    //First name text field
      .find('#\\31 8882_231669pi_18882_231669').type(data.firstName) 
    //Last name text field
      cy.wrap($body)
      .find('#\\31 8882_231671pi_18882_231671').type(data.lastName)
    //Email text field
      // cy.wrap($body)
      // .find('#\\31 8882_231673pi_18882_231673').type(data.email)
    //Company text field
      cy.wrap($body)
      .find('#\\31 8882_231675pi_18882_231675').type(data.company)
    //Industry text field
       cy.wrap($body)
       .find('#\\31 8882_231677pi_18882_231677').type(data.industry)
    //Send me a copy button
      cy.wrap($body)
      .find('#pardot-form > p.submit > input[type=submit]').click()
  })
    })
})

