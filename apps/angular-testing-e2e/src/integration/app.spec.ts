import { getAlbums } from '../support/app.po';

describe('angular-testing', () => {
  beforeEach(() => cy.visit('/'));

  it('should be able to load albums', () => {
    cy.findByRole('button', { name: /get albums/i }).click();

    getAlbums().should('exist');
  });
});
