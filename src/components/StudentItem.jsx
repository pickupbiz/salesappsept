import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const StudentItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card sx={{ bgcolor: item.house }}>
        <CardContent>
          <h4>{`${item.fname} ${item.lname}`}</h4>
          <h5>{`${item.class} - ${item.div}`}</h5>
          <h6>{`Fav Sports: ${item.favsports}`}</h6>
          <h6>{item.gender}</h6>
        </CardContent>
      </Card>
    </Grid>
  );
};
