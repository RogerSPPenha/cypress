describe('Página inicial teste2', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it( 'Deve renderizar h1 com o texto correto!', () => {
    cy.checkTest('titulo-principal','Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!' )
  })
  it( 'Deve renderizar h2 com o texto correto!', () => {
    cy.checkTest('vantagens','Vantagens do nosso banco:')
  })
  it( 'Deve renderizar h3 com o texto correto!', () => {
    cy.checkTest('titulo-vantagem01','Conta e cartão gratuitos')
    cy.checkTest('titulo-vantagem02','Saques sem custo')
    cy.checkTest('titulo-vantagem03','Programa de pontos')
    cy.checkTest('titulo-vantagem04','Seguro Dispositivos')
  })
  it( 'Deve renderizar paragráfo com o texto correto!', () => {
    cy.checkTest('vantagem01','Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
    cy.checkTest('vantagem02','Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
    cy.checkTest('vantagem03','Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
    cy.checkTest('vantagem04','Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })
})