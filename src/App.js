import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import AddIcon from "@material-ui/icons/Add"

import tacosJSON from "./tacos"

const useStyles = makeStyles(theme => ({
  button: {
    margin: 20
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
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
      <Typography>GIMME TACOS</Typography>
      <Typography>Steak and Cilantro</Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => fetchTacos().then(setTacos)}
        fullWidth={true}
        data-cy="gimmeTacos"
      >
        GIMME TACOS
      </Button>
      <GridList cellHeight={300} cols={3}>
        {tacos.map(taco => (
          <GridListTile data-cy="taco" key={taco.imgSrc}>
            <img src={taco.imgSrc} alt={taco.title} />
            <GridListTileBar
              data-cy="taco.name"
              title={taco.title}
              actionIcon={
                <IconButton
                  aria-label={`info about ${taco.title}`}
                  className={classes.icon}
                  data-cy="taco.plusButton"
                >
                  <AddIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

const fetchTacos = () => Promise.resolve(tacosJSON)

export default App
