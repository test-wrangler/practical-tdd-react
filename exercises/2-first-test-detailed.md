# First Test

In this exercise, we'll write our first test. This test will verify that a user can click a button called "GIMME TACOS" to load a list of tacos that are available for them to order. Remember that snippets for each step are included in the [Snippets](#snippets) section after the tasks and that links are included at the very end of the file.

## Steps

1. Visit the page.
2. Write a Cypress command to find the "GIMME TACOS" button using the [contains][1] selector and use the [click][2] command to click it.
3. Add the "GIMME TACOS" button. Watch the spec pass in Cypress.
4. Add to the spec by using the [contains][1] command again to assert that the text "Steak and Cilantro" exists on the page. (This is the name of the first taco in our database.) Watch the spec fail in Cypress.
5. Make it work by adding a static implementation that contains the Steak and Cilantro taco. The snippet for this step is just a static grid with 1 grid tile. After adding the static implementation, watch the spec pass.
6. Now that we have our whole spec written, let's work on making it right. We'll start doing this by converting the static grid that we added in the previous step into a dynamic grid. Before moving onto add the tacos in the next step, take a look at the spec to make sure that it fails as you expect. You should get an error after this step as we have haven't defined our `tacos` variable yet - which the grid is expecting to exist.
7. Add a `useState` hook to manage the state for our tacos.
8. Wire up the "GIMME TACOS" button to "fetch" the tacos from our API by replacing the snippet from step 3 with the snippet for this step. Note that we're not truly fetching tacos from our API yet. In the sprit of keeping things iterative, we're just going to wire up our "GIMME TACOS" button to load static data from a JSON file that we have defined in our src folder for now. We'll handle actually fetching our tacos in a later step.
9. Define our `fetchTacos` function which returns will return our array of JSON tacos.
10. Import the tacos from our JSON file.

## Snippets

==================== 1 ====================

```javascript
// cypress/integration/taco.spec.js
cy.visit("http://localhost:3000")
```

==================== 1 ====================

==================== 2 ====================

```javascript
// cypress/integration/taco.spec.js
cy.contains("GIMME TACOS").click()
```

==================== 2 ====================

==================== 3 ====================

```jsx
// src/App.js
<Button
  className={classes.button}
  variant="contained"
  color="primary"
  fullWidth={true}
>
  GIMME TACOS
</Button>
```

==================== 3 ====================

==================== 4 ====================

```javascript
cy.contains("Steak and Cilantro")
```

==================== 4 ====================

==================== 5 ====================

```jsx
// src/App.js
<GridList cellHeight={300} cols={3}>
  <GridListTile>
    <img
      src={"/assets/images/steak-and-cilantro.jpg"}
      alt={"Picture of Steak and Cilantro taco"}
    />
    <GridListTileBar title={"Steak and Cilantro"} />
  </GridListTile>
</GridList>
```

==================== 5 ====================

==================== 6 ====================

```jsx
// src/App.js
<GridList cellHeight={300} cols={3}>
  {tacos.map(taco => (
    <GridListTile key={taco.getImgSrc()}>
      <img src={taco.getImgSrc()} alt={taco.title} />
      <GridListTileBar
        title={taco.title}
        actionIcon={
          <IconButton
            aria-label={`info about ${taco.title}`}
            className={classes.icon}
            data-testid="addToOrder"
            onClick={() => addToCart(taco)}
          >
            <AddIcon />
          </IconButton>
        }
      />
    </GridListTile>
  ))}
</GridList>
```

==================== 6 ====================

==================== 7 ====================

```javascript
// src/App.js
const [tacos, setTacos] = React.useState([])
```

==================== 7 ====================

==================== 8 ====================

```jsx
// src/App.js
<Button
  className={classes.button}
  variant="contained"
  color="primary"
  fullWidth={true}
  onClick={() => fetchTacos().then(setTacos)}
>
  GIMME TACOS
</Button>
```

==================== 8 ====================

==================== 9 ====================

```jsx
// src/App.js
const fetchTacos = () => Promise.resolve(tacos)
```

==================== 9 ====================

[1]: https://docs.cypress.io/api/commands/contains.html#Syntax
[2]: https://docs.cypress.io/api/commands/click.html#Syntax
