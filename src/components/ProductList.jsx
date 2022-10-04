import React, { useState, useEffect } from "react";
import { Grid, TextField, Rating, Button } from "@mui/material";
import { ProductItem } from "./ProductItem";
import axios from "axios";

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [filtData, setFiltData] = useState([]);
  const [catData, setCatData] = useState([]);
  const [txt, setTxt] = useState("");
  const [cat, setCat] = useState("");
  const [rate, setRate] = useState(0);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    setFiltData(result.data);
    const resultCat = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setCatData(resultCat.data);
  };

  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.title.toUpperCase().includes(txt.toUpperCase()) ||
        item.category.toUpperCase().includes(txt.toUpperCase())
    );
    setFiltData(filtered);
    setCat("");
  }, [txt]);

  useEffect(() => {
    const filtered = data.filter((item) => item.category === cat);
    setFiltData(filtered);
  }, [cat]);

  useEffect(() => {
    const filtered = data.filter(
      (item) => Math.round(item.rating.rate) >= rate
    );
    setFiltData(filtered);
  }, [rate]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            value={txt}
            fullWidth
            onChange={(e) => setTxt(e.target.value)}
            variant="outlined"
            label="Search..."
          />
        </Grid>
        <Grid item xs={4}>
          <Rating
            name="rateit"
            value={rate}
            onChange={(e, val) => setRate(val)}
            fullWidth
          />
        </Grid>
        {catData.map((item) => (
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={() => setCat(item)}>
              {item}
            </Button>
          </Grid>
        ))}

        {filtData.length > 0 &&
          filtData.map((item) => <ProductItem item={item} />)}
      </Grid>
    </div>
  );
};
