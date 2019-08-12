# Debugging Locally

Being able to debug your tests is a necessity. This exercise will show you how to do just that by guiding you through finding a bug that I introduced that's causing our tacos to disappear.

## Steps

1. Open up your Devtools in the Cypress window. Then, in the `taco.spec.js`, call the `debug` command right after we click the button to load our tacos. Cypress will pause for you and a variable called `subject` will be available that you can inspect to see what element we're currently operating on.
2. Log subject out to the console and see if you can figure out why our test is broken. Once you figure this out and fix it, close the devtools console and watch the spec. You'll discover that the spec is still failing because the tacos aren't every showing up on the screen.
3. Open up the devtools again and rerun the spec. You should stop at a debugger statement that I've added. See if you can figure out why the tacos aren't showing up.
4. Once you've found the issue, fix it and watch the spec pass.
