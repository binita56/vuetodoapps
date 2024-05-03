describe("TaskItem Component", () => {
  it("clicks complete button", () => {
    cy.visit("/"); 

   
    cy.get(".circle").each(($button) => {
      cy.wrap($button).click();
    });

  
  });

  it("clicks remove button", () => {
    cy.visit("/"); 

    cy.get(".bi-trash3").each(($button) => {
      cy.wrap($button).click();
    });

  });
});
