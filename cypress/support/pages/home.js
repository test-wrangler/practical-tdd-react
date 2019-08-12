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

export default {
  getGimmeTacos,
  getTacoByName,
  getTacoAddButton
}
