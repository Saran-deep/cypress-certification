const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  "value"
).set;

it("Test Scenario 1", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  cy.visit("https://www.lambdatest.com/selenium-playground/input-form-demo");
  cy.xpath("//h1[normalize-space()='Dropdown Demo']").should("be.visible");
  cy.xpath("//p[normalize-space()='Progress Bar & Sliders']")
    .should("be.visible")
    .click();
  cy.xpath("//a[normalize-space()='Drag & Drop Sliders']")
    .should("be.visible")
    .click();

  cy.screenshot("TestScenario-1-Before-Performing-Slide");

  cy.get("#slider3 > div > input").then(($range) => {
    const range = $range[0];
    nativeInputValueSetter.call(range, 95);
    range.dispatchEvent(new Event("change", { value: 95, bubbles: true }));
  });

  cy.get("#rangeSuccess").should("have.value", "95");

  cy.screenshot("TestScenario-1-After-Performing-Slide");
});
