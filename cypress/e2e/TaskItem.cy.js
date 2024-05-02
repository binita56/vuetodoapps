describe("TaskItem Component", () => {
  it("clicks complete button", () => {
    cy.visit("/"); // Update the URL if necessary

    // Find all complete buttons and click them one by one
    cy.get(".circle").each(($button) => {
      cy.wrap($button).click();
    });

    // Assert that the 'complete' event is emitted for each button clicked
  });

  it("clicks remove button", () => {
    cy.visit("/"); // Update the URL if necessary

    // Find all remove buttons and click them one by one
    cy.get(".bi-trash3").each(($button) => {
      cy.wrap($button).click();
    });

    // Assert that the 'remove' event is emitted for each button clicked
  });
});
