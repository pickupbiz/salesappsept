import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const UserItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card sx={{ bgcolor: "lightcoral" }}>
        <CardContent>
          <h3>{item.name}</h3>
          <b>{item.phone}</b>
          <h5>{item.address.city}</h5>
          <h6>{item.address.geo.lat}</h6>
        </CardContent>
      </Card>
    </Grid>
  );
};
