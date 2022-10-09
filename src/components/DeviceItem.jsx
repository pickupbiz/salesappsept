import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const DeviceItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card sx={{ bgcolor: item.isActive ? "green" : "orange" }}>
        <CardContent>
          <h5>{item.name}</h5>
          <h6>{item.model}</h6>
          <h4>{item.made}</h4>
          <h6>{item.make}</h6>
        </CardContent>
      </Card>
    </Grid>
  );
};
