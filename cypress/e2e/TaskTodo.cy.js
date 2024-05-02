describe("TaskTodo Component", () => {
  it("renders correctly and interacts with tasks", () => {
    // Visit the webpage where the TaskTodo component is hosted
    cy.visit("/"); // Update the URL if necessary

    // Verify that the TaskTodo component exists
    cy.get(".container").should("exist");
    cy.get(".task").should("exist");
    cy.get(".title").should("exist").contains("To Do List");
    cy.get(".form").should("exist");
    cy.get(".taskItems").should("exist");
    cy.get(".clearBtns").should("exist");
    cy.get(".pendingTasks").should("exist");

    // Interact with the TaskTodo component
    cy.get(".form input[type='text']").type("Test Task{enter}");

    // Assert the task is completed
    cy.get(".pendingTasks span").should("contain", "Pending Tasks: ");

    // Remove a task
    cy.get(".taskItems ul li:first-child .bi-trash3").click();

    // Assert the task is removed
    // cy.get(".taskItems ul").should("not.contain", "Test Task");
  });
});
