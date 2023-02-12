import { Button } from "@mui/material";
import React, { Component } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@material-ui/core";

function Counters({ onIncrement, onDecrement, counter, id, onAddToCart }) {
  const currentCounter = counter.find((item) => item.id === id);
  if (!currentCounter) {
    return null;
  }
  return (
    <div>
      <IconButton onClick={() => onAddToCart(id)}>
        <AddShoppingCartIcon />
      </IconButton>
      <Button onClick={() => onIncrement(id)}>+</Button>
      {currentCounter.qty}
      <Button onClick={() => onDecrement(id)}>-</Button>
    </div>
  );
}

export default Counters;
