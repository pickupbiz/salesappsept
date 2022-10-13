import React from "react";
import { Grid, Card, CardContent, Rating } from "@mui/material";

export const EmpItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card sx={{ bgcolor: item.house }}>
        <CardContent>
          <h5>
            {item.name} - {item.age}
          </h5>
          <h6>
            {item.dept} - {item.city}
          </h6>
          <Rating value={item.rating} />
        </CardContent>
      </Card>
    </Grid>
  );
};
