# Test Maintainability

Being able to understand and change our tests is crucial. This is an area that I personally feel gets neglected quite a bit and makes our tests difficult to understand and difficult to change. In this exercise, we'll look at a simple technique that I've found dramatically improves test readability.

## Steps

1. Take a look at the selectors that we created in the last exercise. They're now much more robust, but now everyones' eyes are paying the penalty by having to deal with all of the boiler plate needed to make this happen. A little bit of abstraction will go a long way here. Create a function called `getByDataCy` that abstracts the boilerplate needed to call the `get` command for our "GIMME TACOS" button so that our test maintainer (i.e. future us or anyone from our team having to work with this spec in the future) can focus on the fact that we're using this strategy for selecting our button without having to worry about the specifics of how it's implemented. Just work on the "GIMME TACOS" selector for now. We'll handle the second selector in the next step.

2. To handle the abstraction of our second `data-cy` selector, let's step back and think about how we'd like our test to look ideally. This style of programming has been referred to by some as Wishful Programming or Programming by Wishful Thinking. I find it super helpful in creating readable code since you start with what you'd ideally like the code to look like and implement it that way or make purposeful concessions if the wishful approach is practical to implement at the moment. It also fits right in with the outside-in style development I find works so well.

With that background, in my opinion, an ideal solution for our second selector would look like this: `getByDataCy("tacoName", { text: "Steak and Cilantro" })`. Take a swing at implementing that. It's not as hard as you might think. In the sprit of keeping things iterative, you can comment out the first `getByDataCy` call and just focus on implementing the second one. Once you have that second call implemented, comment the code back in and make both calls work. You don't always have to take such small baby steps, but knowing this pattern is super helpful so that you can reel your work in when it gets too out of control.

[1]: https://api.jquery.com/contains-selector/
