/// <reference types="cypress" />
import EnderecoPage from "../support/page-objects/endereco.page"
import dadosEndereco from "../fixtures/endereco.json"

describe('Funcionalidade Endereços - Faturamentoo e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })



    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Renan', 'Nakatani', 'Instagram', 'Brasil', 'Av França', '2023','Embu', 'São Paulo', '12345-678')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco,
            dadosEndereco[2].numero,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep,
            dadosEndereco[2].telefone,
            dadosEndereco[2].email            
            )
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')

    });
});