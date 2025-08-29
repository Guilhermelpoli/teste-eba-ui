/// <reference types="cypress" />

context('Funcionalidade Login', () =>{
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
        
    });
    
    afterEach(() => {
        cy.screenshot()
        
    });
    
    it('Deve fazer login com sucesso', () => {
        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="logout-sidebar-link"]').should('contain' , 'Logout')
        cy.get('[data-test="product-sort-container"]').should('contain' , 'Name')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario inválidos', () =>{
        
        cy.get('[data-test="username"]').type('standard_user_')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click() 
        cy.get('[data-test="error"]').should('contain' , 'Epic sadface: Username and password do not match any user in this service')
        
    })
    it('Deve exibir uma mensagem de erro ao inserir senha inválidos', () =>{
        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce_')
        cy.get('[data-test="login-button"]').click() 
        cy.get('[data-test="error"]').should('contain' , 'Epic sadface: Username and password do not match any user in this service')
    })
    
})