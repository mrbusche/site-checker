describe('check website', () => {
  it('verifies data', () => {
    Cypress.config('defaultCommandTimeout', 10000);
    cy.visit(Cypress.env('url'));
    cy.contains('No times in October');
    cy.contains('View next month').click();
    cy.contains('No times in November');
    cy.contains('View next month').click();
    cy.contains('No times in December');
  })
})
