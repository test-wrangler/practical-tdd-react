import home from "../support/pages/home"

describe("Ordering tacos", () => {
  it("allows the user to order tacos", () => {
    cy.visit("http://localhost:3000")
    home.getGimmeTacos().click()
    home.getTacoByName("Steak and Cilantro").within(tacoCard => {
      home.getTacoAddButton().click()
    })
    home.getCartButton().within(cartButton => {
      home.getCartButtonCount().should("have.text", "1")
      cy.wrap(cartButton).click()
    })
    home.getCart().within(cart => {
      home
        .getCartItems()
        .should("have.length", 1)
        .first()
        .within(cartItem => {
          home.getCartItemName().should("have.text", "Steak and Cilantro")
        })
    })
  })
})
