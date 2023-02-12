import React from "react";
import "./App.css";
import { PRODUCTS_DATA } from "./data/products";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";

import Counters from "./components/Counters";

//css
const useStyles = makeStyles({
  cardContainer: {
    paddingTop: 80,
    flexWrap: "wrap",
    display: "flex",
    whiteSpace: "nowrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    margin: "5px",
    width: 250,
    height: 450,
  },
  media: {
    height: 300,
  },
});

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const [counter, setCounter] = useState(
    products.map((product) => ({
      ...product,
      qty: 1,
    }))
  );

  const handleIncrement = (id) => {
    setCounter(
      counter.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            qty: counter.qty + 1,
          };
        }
        return counter;
      })
    );
  };

  const handleDecrement = (id) => {
    setCounter(
      counter.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            qty: counter.qty - 1,
          };
        }
        return counter;
      })
    );
  };

  const handleReset = () => {
    setCounter(
      counter.map((counter) => {
        return {
          ...counter,
          qty: 1,
        };
      })
    );
  };

  const handleAddToCart = (id) => {
    const product = counter.find((product) => product.id === id);
    if (!product) {
      return;
    }
    const existingProduct = cartItems.find((item) => item.id === id);

    if (!existingProduct) {
      setCartItems([...cartItems, product]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty + product.qty } : item
        )
      );
    }

    handleReset();
  };
  //currency
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const classes = useStyles();

  return (
    <div>
      <div>
        <NavBar cartItems={cartItems} />
      </div>

      <div className={classes.cardContainer}>
        {counter.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 345 }} className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="green iguana"
              image={item.image}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                {currencyFormatter.format(item.price)}
              </Typography>
              <Typography variant="body2" component="p">
                {item.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Counters
                counter={counter}
                onAddToCart={handleAddToCart}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                id={item.id}
                onReset={handleReset}
              />
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
