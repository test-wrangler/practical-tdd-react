describe("Ordering tacos", () => {
  it("allows the user to order tacos", () => {
    cy.visit("http://localhost:3000")
    cy.get('[data-cy="gimmeTacos"]').click()
    cy.get('[data-cy="tacoName"]:contains("Steak and Cilantro")')
  })
})
