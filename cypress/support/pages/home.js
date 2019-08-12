const getGimmeTacos = () => cy.get({ dataCy: "gimmeTacos" })

const getTacoByName = text =>
  cy
    .get({ dataCy: "taco", text })
    .filter((index, tacoCard) => {
      return (
        Cypress.$(tacoCard)
          .find('[data-cy="taco.name"]')
          .text() === text
      )
    })
    .should("have.length", 1)

const getTacoAddButton = () => cy.get({ dataCy: "taco.plusButton" })

const getCartButton = () => cy.get({ dataCy: "cartButton" })

const getCartButtonCount = () => cy.get({ dataCy: "cartButton.count" })

const getCart = () => cy.get({ dataCy: "cart" })

const getCartItems = () => cy.get({ dataCy: "cart.item" })

const getCartItemName = () => cy.get({ dataCy: "cart.item.name" })

const getCartItemRemoveButton = () => cy.get({ dataCy: "cart.item.delete" })

const addTacoToCart = tacos =>
  cy.window().then(win => {
    win.addTacoToCart(tacos)
  })

const openCart = () =>
  cy.window().then(win => {
    win.openCart()
  })

export default {
  getGimmeTacos,
  getTacoByName,
  getTacoAddButton,
  getCartButton,
  getCartButtonCount,
  getCart,
  getCartItems,
  getCartItemName,
  addTacoToCart,
  openCart,
  getCartItemRemoveButton
}
