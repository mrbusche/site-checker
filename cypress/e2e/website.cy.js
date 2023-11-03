describe('check website', () => {
  it('verifies data', () => {
    cy.visit(Cypress.env('url'));
    cy.contains('No times in November');
    cy.contains('View next month').click();
    cy.contains('No times in December');
  })
})
