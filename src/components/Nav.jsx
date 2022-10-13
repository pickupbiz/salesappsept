import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";

export const Nav = () => {
  return (
    <div className="sub">
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Link to="/home">Home</Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/cust">Customer</Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/greet">Greet</Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/users">Users</Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/emp">Employee</Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/students">Students</Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/alluser">All User</Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/devices">Devices</Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/product">Product</Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/support">Support</Link>
        </Grid>
      </Grid>
    </div>
  );
};
