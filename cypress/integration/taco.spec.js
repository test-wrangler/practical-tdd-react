import home from "../support/pages/home"
import tacos from "../../src/tacos"

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

  it("allows removing tacos from the cart", () => {
    cy.visit("http://localhost:3000")
    home.addTacoToCart(tacos[0])
    home.openCart()
    home.getCart().within(cart => {
      home
        .getCartItems()
        .first()
        /*
         * For some weird reason, Material UI doesn't nest the secondary list item actions under the actual list item
         * that we've defined. So, we have to move up to the parent.
         */
        .parent()
        .within(cartItem => {
          home.getCartItemRemoveButton().click()
        })
      home.getCartItems().should("have.length", 0)
    })
  })
})
