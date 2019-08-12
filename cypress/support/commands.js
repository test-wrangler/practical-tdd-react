// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.overwrite("get", (...args) => {
  const [originalFn, options] = args
  if (typeof options === "object") {
    maybeThrowDataCyError(options)
    const selector = buildSelector(options)
    const log = buildDataCyLog(selector)
    return originalFn(selector, { log: false }).then($elements => {
      setConsoleProps({ options, $elements, selector, log })
      return $elements
    })
  }

  return originalFn(...Cypress._.tail(args))
})

const maybeThrowDataCyError = options => {
  if (!options.dataCy)
    throw new Error(
      "Calling `get` with an object isn't supported without a `dataCy` property"
    )
}

const buildDataCyLog = selector =>
  Cypress.log({
    name: "(Custom) GET",
    displayName: "GET",
    message: `(Custom) ${selector}`
  })

const setConsoleProps = ({ options, $elements, selector, log }) =>
  log.set({
    consoleProps: () => ({
      ...options,
      yielded: $elements,
      elements: $elements.length,
      selector
    })
  })

const buildSelector = options => {
  const selector = `[data-cy="${options.dataCy}"]`
  if (!options.text) return selector
  return selector + `:contains("${options.text}")`
}
