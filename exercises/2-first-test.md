# First Test

In this exercise, we'll write our first test. This test will verify that a user can click a button called "GIMME TACOS" to load a list of tacos that are available for them to order.

## Steps

1. In the `taco.spec.js`, use the Cypress `visit` command to load our app.
2. Find the "GIMME TACOS" button using the `contains` selector and use the `click` command to click it.
3. Add the "GIMME TACOS" button. Watch the spec pass in Cypress.
4. Add to the spec by using the `contains` command again to assert that the text "Steak and Cilantro" exists on the page. (This is the name of the first taco in our database.) Watch the spec fail in Cypress.
5. Make it work by adding a static implementation that contains the Steak and Cilantro taco. The implementation for this step should just be a static grid with 1 grid tile. After adding the static implementation, watch the spec pass.
6. Now that we have our whole spec written, let's work on making it right. Start doing by converting the static grid that we added in the previous step into a dynamic grid. Before moving onto add the tacos in the next step, take a look at the spec to make sure that it fails as you expect.
7. Use a React hook to manage the state of our tacos.
8. Wire up the "GIMME TACOS" button to "fetch" the tacos from our API. In the sprit of keeping things iterative, we're just going to wire up our "GIMME TACOS" button to load static data from a JSON file that we have defined in our src folder for now. We'll handle actually fetching our tacos in a later step. The JSON file with all of the tacos is located at `src/tacos.json`.
9. Watch the spec pass.
