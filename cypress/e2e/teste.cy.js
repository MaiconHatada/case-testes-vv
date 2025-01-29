/// <reference types ="cypress" />


describe('local dos testes', () => {

    beforeEach('acessando local dos testes' , () => {
      
      cy.acessandoSeeOffer() // reaproveitando as etapas de acesso ao site e clicar em See Offer
        
    })

    it('clicando na opção See Offer e validando especificações do produto', () => {
       
        cy.validandoEspecificacoesDoProduto()
    })
   
    it('Alterando a cor do produto selecionado', () => {
        cy.escolhaDaCorEColocandoNoCarrinho() // produto selecionado HP PAVILION 15Z TOUCH LAPTOP
        cy.get('tr.ng-scope > :nth-child(2) > .roboto-regular').contains('HP PAVILION 15Z TOUCH LAPTOP') // Validando o produto escolhido
        cy.get('span[title="YELLOW"]').should('be.visible') // Validando a cor do produto escolhido

    })
})