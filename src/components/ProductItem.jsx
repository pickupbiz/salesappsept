import React from "react";
import { Grid, Card, CardContent, Rating } from "@mui/material";

export const ProductItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card sx={{ bgcolor: "#FF00FF", textAlign: "center" }}>
        <CardContent>
          <img src={item.image} width="200px" height="200px" />
          <h3>{item.title.slice(0, 25) + "..."}</h3>
          <h5>{item.category}</h5>
          <Rating name="rate" value={item.rating.rate} />
          {"(" + item.rating.count + ")"}
        </CardContent>
      </Card>
    </Grid>
  );
};
