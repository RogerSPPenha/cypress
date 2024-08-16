describe('Página Inicial', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it( 'Deve renderizar h1 com o texto correto!', () => {
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
  it( 'Deve renderizar h2 com o texto correto!', () => {
    cy.getByData('vantagens').contains('Vantagens do nosso banco:')
  })
  it( 'Deve renderizar h3 com o texto correto!', () => {
    cy.getByData('titulo-vantagem01').contains('Conta e cartão gratuitos')
    cy.getByData('titulo-vantagem02').contains('Saques sem custo')
    cy.getByData('titulo-vantagem03').contains('Programa de pontos')
    cy.getByData('titulo-vantagem04').contains('Seguro Dispositivos')
  })
  it( 'Deve renderizar paragráfo com o texto correto!', () => {
    cy.getByData('vantagem01').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
    cy.getByData('vantagem02').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
    cy.getByData('vantagem03').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
    cy.getByData('vantagem04').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
    
  })
})