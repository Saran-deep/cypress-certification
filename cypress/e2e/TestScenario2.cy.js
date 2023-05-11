describe("Test Scenario 2", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it("Check form’s accessibility standard", () => {
    cy.viewport("samsung-note9");
    cy.visit("https://www.lambdatest.com/selenium-playground");
    cy.xpath("//h1[normalize-space()='Selenium Playground']").should(
      "be.visible"
    );
    cy.xpath("//h2[normalize-space()='Input Forms']").should("be.visible");
    cy.xpath("//a[normalize-space()='Input Form Submit']")
      .should("be.visible")
      .click();
    cy.xpath("//h2[normalize-space()='Input form with validations.']").should(
      "be.visible"
    );

    cy.screenshot("TestScenario-2-Selenium-Playground-Page");
    cy.lighthouse();
    cy.pa11y();
  });

  it("Fill in all the fields.", () => {
    cy.viewport("samsung-note9");
    cy.visit("https://www.lambdatest.com/selenium-playground");
    cy.xpath("//h1[normalize-space()='Selenium Playground']").should(
      "be.visible"
    );
    cy.xpath("//h2[normalize-space()='Input Forms']").should("be.visible");
    cy.xpath("//a[normalize-space()='Input Form Submit']")
      .should("be.visible")
      .click();
    cy.xpath("//h2[normalize-space()='Input form with validations.']").should(
      "be.visible"
    );
    cy.screenshot("TestScenario-2-Before-Filling-Form");
    cy.xpath("//input[@id='name']")
      .should("be.visible")
      .type("John")
      .should("have.value", "John");
    cy.xpath("//input[@id='inputEmail4']")
      .should("be.visible")
      .type("John@email.com")
      .should("have.value", "John@email.com");
    cy.xpath("//input[@id='inputPassword4']")
      .should("be.visible")
      .type("P@ss0fnmkmg")
      .should("have.value", "P@ss0fnmkmg");
    cy.xpath("//input[@id='company']")
      .should("be.visible")
      .type("Reflections")
      .should("have.value", "Reflections");
    cy.xpath("//input[@id='websitename']")
      .should("be.visible")
      .type("Reflections.com")
      .should("have.value", "Reflections.com");
    cy.xpath("//select[@name='country']")
      .select("India")
      .should("have.value", "IN");
    cy.xpath("//input[@id='inputCity']")
      .should("be.visible")
      .type("Trivandrum")
      .should("have.value", "Trivandrum");
    cy.xpath("//input[@id='inputAddress1']")
      .should("be.visible")
      .type("Reflections, Infopark, Trivandrum, Kerala")
      .should("have.value", "Reflections, Infopark, Trivandrum, Kerala");
    cy.xpath("//input[@id='inputAddress2']")
      .should("be.visible")
      .type("Reflections, Infopark, Trivandrum, Kerala")
      .should("have.value", "Reflections, Infopark, Trivandrum, Kerala");
    cy.xpath("//input[@id='inputState']")
      .should("be.visible")
      .type("Kerala")
      .should("have.value", "Kerala");
    cy.xpath("//input[@id='inputZip']")
      .should("be.visible")
      .type("123456")
      .should("have.value", "123456");
    cy.screenshot("TestScenario-2-After-Filling-Form");
    cy.xpath("//button[normalize-space()='Submit']").click();
    cy.get(".success-msg")
      .should("be.visible")
      .should(
        "have.text",
        "Thanks for contacting us, we will get back to you shortly."
      );
    cy.screenshot("TestScenario-2-After-Submitting-Form");

    cy.lighthouse(
      {
        performanceBudget: {
          metrics: [
            {
              id: "first-contentful-paint",
              weight: 1,
              target: 3000,
            },
            {
              id: "speed-index",
              weight: 1,
              target: 4000,
            },
            {
              id: "largest-contentful-paint",
              weight: 1,
              target: 4000,
            },
            {
              id: "interactive",
              weight: 1,
              target: 5000,
            },
            {
              id: "total-blocking-time",
              weight: 1,
              target: 300,
            },
          ],
        },
      },
      {
        blockedUrlPatterns: ["*.jpg", "*.png", "*.gif", "*.svg"],
      }
    );
  });
});
