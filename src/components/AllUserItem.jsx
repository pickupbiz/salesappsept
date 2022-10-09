import React from "react";
import { Grid } from "@mui/material";

export const AllUserItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <h4>{item.id}</h4>
      <h4>{item.name}</h4>
      <h4>{item.email}</h4>
    </Grid>
  );
};
