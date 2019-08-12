# App Actions

As we discussed a couple of exercises ago, running through the UI to perform every has the potential to slow our tests down significantly. This works against our goal of being able to use our tests as a productivity and feedback mechanism. To fix this, it's considered a best practice in the Cypress community to use App Actions to perform UI actions that you've already tested in other tests. In this exercise, we'll take a concrete look at how to use App Actions to set state in React.

One tradeoff to be aware of here is that we're circumventing the UI - which is how our users interact with the application. Because of this, we run the risk of the functionality that the functionality in the App Action will diverge from the actual result that occurs by performing the same actions through the UI. The tradeoff for the faster tests is usually worth it as long as we have a test that exercises the functionality through the UI.

The basic idea of App Actions is that we expose small amounts of behavior from our application to the window and then call that behavior from within the test to get our application into the state that we want it in.

## Steps

1. Using wishful programming write an App Action to add a taco to the cart. (Hint: You can expose some of the React hooks that we've defined on the window object if `window.Cypress` exists.)

2. Implement the functionality for the app action to add a taco to the cart. Note that you can require the tacos JSON file located under the `src` folder.

3. Use wishful programming to write an app action to open the cart.

4. Implement the action.

5. Get the cart using the method that we defined in the previous exercise and get the first item from the cart so that we can use the `within` command to scope a new Page Object method (that we'll create in the next step) that will get the remove button of the cart for us. Before you call within, you'll need to call the Cypress `parent` command. Material UI does a weird thing where it doesn't nest the secondary action for the list item under the same element as the rest of the list item. To circumvent this issue, we have to call `parent` and then call `within`.

6. Create a method on the home Page Object to locate the remove button for an item within the cart and click it.

7. Assert that we have no more items in our cart.
