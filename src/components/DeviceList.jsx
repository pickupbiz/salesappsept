import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import { DeviceItem } from "./DeviceItem";

export const DeviceList = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await axios.get("http://localhost:8080/devices");
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Grid container spacing={3}>
        {data.length > 0 && data.map((item) => <DeviceItem item={item} />)}
      </Grid>
    </div>
  );
};
