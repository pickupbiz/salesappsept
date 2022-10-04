import React, { useState, useEffect } from "react";
import { Grid, TextField, Rating } from "@mui/material";
import { ProductItem } from "./ProductItem";
import axios from "axios";

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [filtData, setFiltData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    setFiltData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField fullWidth variant="outlined" label="Search..." />
        </Grid>
        <Grid item xs={4}>
          <Rating name="rateit" value={3} fullWidth />
        </Grid>
        {filtData.length > 0 &&
          filtData.map((item) => <ProductItem item={item} />)}
      </Grid>
    </div>
  );
};
