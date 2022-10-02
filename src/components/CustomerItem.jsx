import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const CustomerItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card sx={{ bgcolor: "navy", color: "white" }}>
        <CardContent>
          <h4>{item.name}</h4>
          <h5>{item.mobile}</h5>
          <h6>{item.city}</h6>
        </CardContent>
      </Card>
    </Grid>
  );
};
