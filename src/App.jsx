import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PRODUCTS_DATA } from "./data/products";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function App() {
  console.log("me");
  const [products, setProducts] = useState(PRODUCTS_DATA);
  console.log(PRODUCTS_DATA);

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      {PRODUCTS_DATA.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt="green iguana" image={item.image} />
          <CardContent>
            <Typography variant="h5" component="h2">
              {currencyFormatter.format(item.price)}
            </Typography>
            <Typography variant="body2" component="p">
              {item.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add</Button>
            <Button size="small">+ -</Button>
          </CardActions>
        </Card>
      ))}
    </div>
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     component="img"
    //     alt="green iguana"
    //     height="140"
    //     image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Lizard
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       Lizards are a widespread group of squamate reptiles, with over 6,000
    //       species, ranging across all continents except Antarctica
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Share</Button>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
}

export default App;
