import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";

export const Greet = () => {
  const [msg, setMsg] = useState("Welcome!!!!!");
  const [count, setCount] = useState(1);

  useEffect(() => {
    count > 0 && count < 5 && setMsg("Have nice Sleep!!!");
    count > 4 && count < 12 && setMsg("Good Morning!!!!");
    count === 12 && setMsg("Good Noon!!!!!!!");
    count > 12 && count < 16 && setMsg("Good Afternoon");
    count > 15 && count < 19 && setMsg("Good Evening");
    count > 18 && count < 24 && setMsg("Good Night.....");
    count === 24 && setMsg("Mid night.....");
  }, [count]);

  useEffect(() => {
    const current = new Date();
    const hr = current.getHours();
    setCount(hr);
  }, []);
  return (
    <div>
      <h1>{msg}</h1>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Button
            onClick={() => count > 1 && setCount(count - 1)}
            variant="contained"
            fullWidth
          >
            -
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <h3>{count}</h3>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={() => count < 24 && setCount(count + 1)}
            variant="contained"
            fullWidth
          >
            +
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
