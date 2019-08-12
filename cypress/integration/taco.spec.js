describe("Ordering tacos", () => {
  it("allows the user to order tacos", () => {
    cy.visit("http://localhost:3000")
    getByDataCy("gimmeTacos").click()
    getByDataCy("tacoName", { text: "Steak and Cilantro" })
  })
})

function getByDataCy(name, options = {}) {
  const { text } = options
  let selectorString = `[data-cy="${name}"]`
  if (text) selectorString += `:contains("${text}")`
  return cy.get(selectorString)
}
