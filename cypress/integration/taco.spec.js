describe("Ordering tacos", () => {
  it("allows the user to order tacos", () => {
    cy.visit("http://localhost:3000")
    cy.get({ dataCy: "gimmeTacos" }).click()
    cy.get({ dataCy: "tacoName", text: "Steak and Cilantro" })
  })
})
