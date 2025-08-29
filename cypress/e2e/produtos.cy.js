/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
describe('Funcionalidade Página de produtos', () => {


    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });


    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()
            //.last()    
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 15
        cy.get('.product-block')
        .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('[name="quantity"]').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });
});