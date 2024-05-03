describe("TaskTodo Component", () => {
  it("renders correctly and interacts with tasks", () => {

    cy.visit("/"); 


    cy.get(".container").should("exist");
    cy.get(".task").should("exist");
    cy.get(".title").should("exist").contains("To Do List");
    cy.get(".form").should("exist");
    cy.get(".taskItems").should("exist");
    cy.get(".clearBtns").should("exist");
    cy.get(".pendingTasks").should("exist");


    cy.get(".form input[type='text']").type("Test Task{enter}");


    cy.get(".pendingTasks span").should("contain", "Pending Tasks: ");

  
    cy.get(".taskItems ul li:first-child .bi-trash3").click();

  });
});
