# Page Objects

System / E2E tests are notorious for breaking because a small piece of UI functionality changed. Simple changes often ripple throughout all of the tests and require performing ["shotgun surgery"](1). (I just came across that link, but it provides a concise description of shotgun surgery and has some cool pictures). One way to avoid this is to encapsulate access and interactions through something called [Page Objects](https://www.martinfowler.com/bliki/PageObject.html). Page Objects are just a fancy name for objects that encapsulate the knowledge of how to find and interact with different pages in your app.

One thing to note is that Page Objects tend to be discouraged in the Cypress community because they go through the UI and have internal state. Going through the UI for everything can really slow tests down if a set of actions that you perform over and over take a long time. Internal state can make tests more difficult to reasone about. The recommended approach in the Cypress community is to use something called [App Actions](2) (which we'll go over in the next exercise). When I refer to Page Objects, I'm actually also referring to the use of App Actions. The real idea here that I'm trying to communicate is that we're trying to encapsulate the knowledge of how to interact with our pages - whether that's actually through the UI or by using App Actions - so that changes to UI functionality don't require shotgun surgery.

Also, you're probably starting to feel more comfortable with the flow of TDD now. As you get more comfortable, you'll start to develop an intuition for when you need to switch back to your spec. The goal is to use your tests/specs as a productivity and feedback tool. You need to play around with how often you should flip back to your spec so that you can learn to develop this balance. Start doing that as part of this exercise. If you find yourself starting to get lost in functionality, then try to start switching back and forth between the spec more to guide you.

Finally, with all of that out of the way, let's learn how to use page objects by adding some functionality that allows our users to add tacos to their cart.

## Steps

1. Extract the two `get` commands that we have in our spec to functions. Start by just extracting these functions in the spec file for now. Try to make the names of the functions self-documenting - which means that the reader should be able to get a good idea of what the functions do just by looking at their names.

2. I typically like to extract these functions to a file in `cypress/support/pages` and put them in a file that's named after the page that they represent. In this case, I'm calling the page `home`.

3. We're going to add a plus button to the taco cards so that the user can click the button to have the taco added to their cart. Can you figure out what a good next step would be for our spec? Try to figure out before moving onto the next step.

4. I think a great next step would be for us to write some test code that ensures that we can find the plus button correctly. We could use a `dataCy` selector for this, but that leaves us with 1 problem: How do we ensure that the button that we're getting is the right button for the taco since the button doesn't have any text? There are two ways to handle this. We could make the `dataCy` attribute for our plus button the name of the taco or have it reference the ID of the taco that we're working with. The second option is that we can use some scoping by calling the [`within`](3) Cypress command. This command receives a callback and scopes whatever calls (`get`, etc.) we make inside of it under the DOM element that we selected. Since we're not actually referencing our JSON objects in the test yet, let's go for the second option. To support using the within command, we'll need to add another `dataCy` attribute to grab the card for our taco. This will allow us to get the taco name and plus button for a taco by name. See if you can figure out how to do this. Call the `dataCy` attribute just `taco`. We'll add the `within` command in a later step.

5. Once you're able to select your taco card with the `dataCy` attribute, the next thing we'll need to do is use the [`filter`](4) command to find the card that contains the name of our taco. The object that's passed as filter's second parameter is a regular DOM element reference. Since it's a regular DOM element, there are obviously a ton of different ways we could go about finding this element. For this exercise, we're just going to wrap the element in a jQuery object using [Cypress.\$](6) which will allow us to use jQuery's `find` and `text` commands to check to see if the taco name is the one that we're expecting.

6. Once we've performed the filter, we can add a small [assertion](5) to make sure that only 1 card matched our filter.

7. Grab the first card using the Cypress `first` command.

8. Now that we have the card, use the `within` command to scope our call to get the plus button for the taco and click it. I'd recommend still using the `dataCy` selectors to locate part of components (like we're doing here), but there's a wrinkle here to be aware of. The element that's yielded in the `filter` callback is a jQuery element, so we'll have to hand code our `data-cy` attribute selector using jQuery's `find` method. Also, one other thing I like to do as I create these `dataCy` attributes is use dot notation to make it easy to see what component or part of the UI the `dataCy` attribute is referring to. Since we're trying to find the plus button, I would write something like this: `taco.plusButton` as the `dataCy` attribute for the plus button.

9. Once you've located the plus button, use the Cypress `click` command to click it.

10. Finally, click on the command that we're using to click the plus button in the sidebar of Cypress' test runner, hover over it, and confirm that we're clicking the plus button for the right taco.

[1]: https://refactoring.guru/smells/shotgun-surgery
[2]: https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/
[3]: https://docs.cypress.io/api/commands/within.html#Syntax
[4]: https://docs.cypress.io/api/commands/filter.html#Syntax
[5]: https://docs.cypress.io/api/commands/should.html#Syntax
[6]: https://docs.cypress.io/api/utilities/$.html#Syntax
