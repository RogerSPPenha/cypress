describe('Formulário cadastro', () => {
  beforeEach(()=> {
  cy.visit('http://localhost:3000')
  })
  
  it('Usuário deve conseguir se cadastrar com sucesso', () => {
    cy.getByData('botao-cadastro').click() 
    cy.getByData('nome-input').type('Jose da Silva')
    cy.getByData('email-input').type('ze5@email.com')
    cy.getByData('senha-input').type('456789')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')

  })
  
  it('Não deve permitir nome em branco', () => {
    cy.getByData('botao-cadastro').click()
    
    cy.getByData('email-input').type('ze3@email.com')
    cy.getByData('senha-input').type('456789')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de nome é obrigatório') 
    
    }) 
  it('Não deve permitir email em branco', () => {
    cy.getByData('botao-cadastro').click()
    
    cy.getByData('nome-input').type('Jose da Silva')
    cy.getByData('senha-input').type('456789')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'E-mail já cadastrado!') 
    
    }) 
  it('Não deve permitir senha em branco', () => {
    cy.getByData('botao-cadastro').click()
    
    cy.getByData('nome-input').type('Jose da Silva')
    cy.getByData('email-input').type('ze3@email.com')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'E-mail já cadastrado!') 
    
    }) 
})
