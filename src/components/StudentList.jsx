import React, { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import axios from "axios";
import Select from "react-select";
import { StudentItem } from "./StudentItem";

export const StudentList = () => {
  const [data, setData] = useState([]);
  const options = [
    { value: "all", label: "all" },
    { value: "green", label: "green" },
    { value: "red", label: "red" },
    { value: "orange", label: "orange" },
    { value: "purple", label: "purple" },
  ];
  const optionsClass = [
    { value: "all", label: "all" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];
  const optionsDiv = [
    { value: "all", label: "all" },
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
  ];

  const handleChangeHouse = async (selected) => {
    if (selected.value === "all") {
      getData();
    } else {
      const payload = { house: selected.value };
      const result = await axios.post(
        "http://localhost:5050/housewise",
        payload
      );
      setData(result.data);
    }
  };
  const handleChangeClass = async (selected) => {
    const payload = { class: Number(selected.value) };
    const result = await axios.post("http://localhost:5050/classwise", payload);
    setData(result.data);
  };
  const getData = async () => {
    const result = await axios.get("http://localhost:5050/all");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Select options={options} onChange={handleChangeHouse} />
        </Grid>
        <Grid item xs={3}>
          <Select options={optionsClass} onChange={handleChangeClass} />
        </Grid>
        <Grid item xs={3}>
          <Select options={optionsDiv} />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" fullWidth>
            Search
          </Button>
        </Grid>
        {data.length > 0 && data.map((item) => <StudentItem item={item} />)}
      </Grid>
    </div>
  );
};
