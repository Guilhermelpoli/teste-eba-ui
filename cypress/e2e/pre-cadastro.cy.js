/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
describe('Funcionalidade Pré Cadastro', () => {


    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    it('Deve completar o pré cadastro com sucesso', ()=> {
        let emailFaker = faker.internet.email()
        let senhaFaker = faker.internet.password(12, true)
        let nomeFaker = faker.person.firstName()
        let sobrenomeFaker =faker.person.lastName()

        cy.get('.register > :nth-child(1) > label').type(emailFaker)
        cy.get('.register > :nth-child(2) > [name="password"]').type(senhaFaker)
        cy.get('[name="register"]').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('[name="account_first_name"]').type(nomeFaker)
        cy.get('[name="account_last_name"]').type(sobrenomeFaker)
        cy.get('[name="save_account_details"]').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    })


});