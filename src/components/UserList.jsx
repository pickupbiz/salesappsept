import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { UserItem } from "./UserItem";
import axios from "axios";

export const UserList = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {data.length > 0 && data.map((item) => <UserItem item={item} />)}
      </Grid>
    </div>
  );
};
