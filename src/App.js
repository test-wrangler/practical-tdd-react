import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"

import tacosJSON from "./tacos"

const useStyles = makeStyles(theme => ({
  button: {
    margin: 20
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  }
}))

function App() {
  const classes = useStyles()
  const [tacos, setTacos] = React.useState([])

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Tacos
          </Typography>
        </Toolbar>
      </AppBar>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => fetchTacos().then(setTacos)}
        fullWidth={true}
      >
        GIMME TACOS
      </Button>
      <GridList cellHeight={300} cols={3}>
        {tacos.map(taco => (
          <GridListTile key={taco.imgSrc}>
            <img src={taco.imgSrc} alt={taco.title} />
            <GridListTileBar title={taco.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

const fetchTacos = () => Promise.resolve(tacosJSON)

export default App
