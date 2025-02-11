import { v4 as uuidv4 } from "uuid";

describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
  });
});

describe("creating a todo", () => {
  it("creates a tdo successfully", () => {
    const titleTodoToCreate = uuidv4();
    cy.visit("/");
    cy.get("#add_todo").should("exist");
    cy.get("#add_todo").type(titleTodoToCreate);
    cy.get("#submit").click();
    cy.contains(titleTodoToCreate);
  });
});

describe("creating a todo and then deleting it", () => {
  it("creates a tdo successfully", () => {
    const titleTodoToCreate = uuidv4();
    cy.visit("/");
    cy.get("#add_todo").should("exist");
    cy.get("#add_todo").type(titleTodoToCreate);
    cy.get("#submit").click();
    cy.contains(titleTodoToCreate);
    cy.get(`#${titleTodoToCreate}`).click();
    cy.get(titleTodoToCreate).should("not.exist");
  });
});
