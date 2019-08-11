# Cypress Intro

Cypress has a great test runner that provides a lot of visual tooling to help you debug and write your tests. Let's get familiar with what it has to offer.

Tasks:

1. Hover over the different commands to see the output that you get. Click on the commands and check out the info that gets logged to the console.
2. Use the selector playground to select an element. Toggle the selector to use "contains" and see what you get.
3. If you're using an IDE, enable IntelliSense. First, go to your spec and hover over a Cypress method. IntelliSense doesn't know where to infer types from, so you'll just get a popover saying `any`. Now, create a `tsconfig.json` file inside of your Cypress folder with the content below. After you do that, go back to your test and hover over a Cypress method. You should now see documentation for the method.

```
{
  "compilerOptions": {
    "allowJs": true,
    "baseUrl": "../node_modules",
    "types": [
      "cypress"
    ]
  },
  "include": [
    "**/*.*"
  ]
}
```
