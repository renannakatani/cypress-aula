/// <reference types="cypress"/>
import { faker as _faker } from '@faker-js/faker';

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });



    it('Deve completar o pré cadastro com sucesso', () => {

let nomeFaker = _faker.name.firstName()
let sobrenomeFaker = _faker.name.lastName()
let emailFaker = _faker.internet.email(nomeFaker)

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    })

    it.only('Deve completar o pré-cadastro com sucesso usando Comandos customizados', () => {
        let emailFaker2 = _faker.internet.email()
        cy.preCadastro(emailFaker2, 'senha!@#forte', 'Renan', 'Nakatani')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

});