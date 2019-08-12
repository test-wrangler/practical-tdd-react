import home from "../support/pages/home"

describe("Ordering tacos", () => {
  it("allows the user to order tacos", () => {
    cy.visit("http://localhost:3000")
    home.getGimmeTacos().click()
    home.getTacoByName("Steak and Cilantro").within(tacoCard => {
      home.getTacoAddButton().click()
    })
  })
})
