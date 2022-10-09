import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { AllUserItem } from "./AllUserItem";

export const AllUserList = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await axios.get("http://localhost:8080/allusers");
    setData(result.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Grid container spacing={3}>
        {data.length > 0 && data.map((item) => <AllUserItem item={item} />)}
      </Grid>
    </div>
  );
};
