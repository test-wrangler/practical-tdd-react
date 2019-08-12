import React from "react"
import _ from "lodash"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import Avatar from "@material-ui/core/Avatar"
import ListItemText from "@material-ui/core/ListItemText"
import Badge from "@material-ui/core/Badge"
import AddIcon from "@material-ui/icons/Add"
import CartIcon from "@material-ui/icons/ShoppingCart"
import DeleteIcon from "@material-ui/icons/Delete"

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
  const [cart, setCart] = React.useState([])
  const addToCart = item => setCart([...cart, item])
  if (window.Cypress) {
    window.addTacoToCart = addToCart
  }
  const removeFromCart = item => {
    const updatedItems = _.reject(cart, { id: item.id })
    setCart(updatedItems)
  }
  const [isOpen, setIsOpen] = React.useState(false)
  if (window.Cypress) {
    window.openCart = () => setIsOpen(true)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            data-cy="cartButton"
            onClick={() => setIsOpen(true)}
          >
            <Badge
              data-cy="cartButton.count"
              badgeContent={cart.length}
              color="primary"
            >
              <CartIcon />
            </Badge>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tacos
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={isOpen} onBackdropClick={() => setIsOpen(false)}>
        <div className={classes.list} role="presentation">
          <List data-cy="cart">
            {cart.map(item => (
              <ListItem data-cy="cart.item" button key={item.title}>
                <ListItemAvatar>
                  <Avatar alt={`Picture of ${item.title}`} src={item.imgSrc} />
                </ListItemAvatar>
                <ListItemText data-cy="cart.item.name" primary={item.title} />
                <ListItemSecondaryAction data-cy="cart.item.delete">
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => removeFromCart(item)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
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
                  onClick={() => addToCart(taco)}
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
