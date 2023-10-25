describe('check website', () => {
  it('verifies data', () => {
    console.log('url', Cypress.env('url').slice(0, 10))
    console.log('CYPRESS_url', Cypress.env('CYPRESS_url').slice(0, 10))
    Cypress.config('defaultCommandTimeout', 10000);
    cy.visit(Cypress.env('url'));
    cy.contains('No times in October');
    cy.contains('View next month').click();
    cy.contains('No times in November');
    cy.contains('View next month').click();
    cy.contains('No times in December');
  })
})
