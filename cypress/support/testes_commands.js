Cypress.Commands.add('acessandoSeeOffer', () => {
    cy.visit('https://advantageonlineshopping.com')
    .wait(8000)
    cy.get('#see_offer_btn').click().wait(3000)
})

Cypress.Commands.add('validandoAcessoSeeOffer', () => {
    cy.get('#mainImg').should('be.visible')
})

Cypress.Commands.add('escolhaDaCorEColocandoNoCarrinho', () => {
    cy.get('[ng-show="firstImageToShow"] > .YELLOW').click()
    cy.get('.fixedBtn > .roboto-medium').click().wait(1000) // adicionando ao carrinho
    cy.get('#shoppingCartLink').click()
    
})
