# Robust Selectors

We don't want our tests to break if we decided to do something simple, like change the text on a button. Also, as you saw in the previous exercise, it's easy to run into problems if we rely on `contains` too much. To avoid these problems, it's considered a best practice to use data attributes to locate the elements that we need to interact with.

I added the "GIMME TACOS" text back into our app that caused our spec to fail in the previous exercise. Additionally, I added the text "Steak and Cilantro" to the screen, so our spec that's asserting that our tacos loaded correctly is now giving us a false positive. Let's implement some robust selectors so that we can squash these kinds of bugs for good.

## Steps

1. Change the `contains` that we're using to find the button to use a data attribute selector by using the `get` command. We'll want to name our attribute `data-cy` as Cypress recognizes this attribute in the playground and will give it precedence when deteriming which selector to suggest. The syntax for using the `get` command would be as follows: `cy.get('[data-cy="gimmeTacos"'])`. Once you change this, I recommend watching the spec fail so that you know it fails for the right reason.
2. Now, add the data cy attribute to our button and watch the spec pass.
3. We can use a similar approach to fix the false positive that we're getting when we're checking for "Steak and Cilantro". Instead of just checking to see if the page contains the text "Steak and Cilantro", let's use the `data-cy` attribute to narrow things down a little bit. Once we've narrowed things down, we can assert that our results contains "Steak and Cilantro". The best solution to do this out of the box is to use the jQuery [contains](1) selector. Note that this is not the same as the Cypress `contains` command. Cypress supports jQuery selectors out of the box, so there's a lot of flexibility in what we can do with our selectors. See if you can figure out how to use the `data-cy` attribute selector and jQuery's `contains` selector together to make our assertion about our "Steak and Cilantro" taco more robust.

[1]: https://api.jquery.com/contains-selector/
