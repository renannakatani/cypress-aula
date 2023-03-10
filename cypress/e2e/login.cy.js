/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit('my-account/')
    });
    
    afterEach(() => {
        cy.screenshot()
    });
    

    it('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
    })

    it('Deve fazer login com sucesso - Usando arquivo de dados ', () => {
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
    });

    it('Deve fazer login com sucesso - com fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(perfil.usuario)
            cy.get('#password').type(perfil.senha, {log:false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
        })
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválidos', () =>{
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain' , 'Erro: a senha fornecida para o e-mail ebac@teste.com está incorreta. Perdeu a senha?')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain' , 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
})