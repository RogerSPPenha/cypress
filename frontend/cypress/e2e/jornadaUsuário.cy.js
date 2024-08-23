describe('Jornadas de usuário', () => {
  it('Deve permitir que o usuário acesse a aplicação, realize uma transferência e faça logout', () => {
  cy.visit('/')
  cy.getByData('botao-login').click()
  cy.getByData('email-input').type('neilton@alura.com')
  cy.getByData('senha-input').type('123456')
  cy.getByData('botao-enviar').click()
  cy.location('pathname').should('eq','/home')
  
  cy.getByData('select-opcoes').select('Transferência') /* no formulário, 'select-opcoes' é o campo onde

  selecionamos qual tipo de transação. Escolhemos 'Transferência' */

  cy.getByData('form-input').type('80') /* incluímos um valor para a transferência*/
  cy.getByData('realiza-transacao').click()

  cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80') /* no histórico de transações (ul), encontraremos um li, o último, que contenha o valor que inserimos */

  cy.getByData('botao-sair').click()
  cy.location('pathname').should('eq','/')
  })
  it('Deve permitir que o usuário acesse a aplicação, realize uma Depósito e faça logout', () => {
    cy.visit('/')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    cy.location('pathname').should('eq','/home')
    
    cy.getByData('select-opcoes').select('Depósito') /* no formulário, 'select-opcoes' é o campo onde
    selecionamos qual tipo de transação. Escolhemos 'Transferência' */
  
    cy.getByData('form-input').type('100') /* incluímos um valor para a transferência*/
    cy.getByData('realiza-transacao').click()
  
    cy.getByData('lista-transacoes').find('li').last().contains('R$ 100') /* no histórico de transações (ul), encontraremos um li, o último, que contenha o valor que inserimos */
  
    cy.getByData('botao-sair').click()
    cy.location('pathname').should('eq','/')
    })
})
