describe('Add Product to Cart', () => {
  it('should be able to navigate to the product page and add it to the cart', () => {
    cy.visit('/');
    cy.get('a[href^="/product"]').first().click();
    cy.location('pathname').should('include', '/product');
    cy.contains('Adicionar ao carrinho').click();
    cy.contains('1').should('exist');
  });

  it('should not be able to count duplicated products on the cart', () => {
    cy.visit('/');
    cy.get('a[href^="/product"]').first().click();
    cy.location('pathname').should('include', '/product');
    cy.contains('Adicionar ao carrinho').click();
    cy.contains('1').should('exist');
  });

  it('should be able to search a product and add it to cart', () => {
    cy.searchByQuery('moletom');
    cy.get('a[href^="/product"]').first().click();
    cy.location('pathname').should('include', '/product');
    cy.contains('Adicionar ao carrinho').click();
    cy.contains('1').should('exist');
  });
});
