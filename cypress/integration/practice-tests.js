// it("can run a test", () => {
//   assert.equal(1, 1);
// });


// // Checks if it can navigate to a specific page
// it("can navigate pages", () => {
//   cy.visit("https://example.cypress.io/");
// });


// // Navigates to a specific page and checks if a specific word is present
// it("can navigate pages", () => {
//   cy.visit("https://example.cypress.io/");
//   cy.contains("within");
//   // cy.contains("zzzzzz");

// });

// // Interact with element
// it("can navigate pages", () => {
//   cy.visit("https://example.cypress.io/");
//   cy.contains("within").click();
// });


// // verifies we are on the right page
// it("can navigate pages", () => {
//   cy.visit("https://example.cypress.io/");
//   cy.contains("within").click();
//   cy.url().should("include", "/commands/querying");
// });


// // CYPRESS COMMANDS

// /* 
// https://example.cypress.io/
// */

// // logging stuff inside the cypress side bar
// it("logging", () => {
//   cy.log("helloooo");
// })


// WORKSHOP


// CAN NAVIGATE TO AN EXISTING PAGE

it("Can navigate to an existing page", () => {
  // fails
  // cy.visit("localhost:3333/abou");

  // works
  cy.visit("about");
});



// CAN LOOK FOR TEXT

it("Can look for text", () => {
  cy.visit("localhost:3333");

  // fails because it's case sensitive
  // cy.contains("about");

  // succeeds
  cy.contains("About");
})



// CAN SUBMIT A FORM

it("Can submit a form", () => {

  cy.visit("localhost:3333/sign-up");

  // enter email
  cy.get("form").find("#email").type("helloemail@gmail.com");

  // enter password
  cy.get("form").find("#password").type("secretpassword");

  // submit the form
  cy.get("form").submit();
})



// CAN REDIRECT AFTER SUBMITTING FORM

it("Redirects to welcome page", () => {

  cy.visit("localhost:3333/sign-up");

  // enter email
  cy.get("form").find("#email").type("helloemail@gmail.com");

  // enter password
  cy.get("form").find("#password").type("secretpassword");

  // submit the form
  cy.get("form").submit();

  // checks if after submitting the form it redirects to the welcome page
  cy.url().should("include", "/welcome");


})