import React, { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@mui/material";
import axios from "axios";
import Select from "react-select";
import { EmpItem } from "./EmpItem";

export const EmpList = () => {
  const [data, setData] = useState([]);
  const [houseData, setHouseData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [deptData, setDeptData] = useState([]);
  const [house, setHouse] = useState("");
  const [city, setCity] = useState("");
  const [dept, setDept] = useState("");
  const [txtHouse, setTxtHouse] = useState("");

  const getData = async () => {
    const result = await axios.get("http://localhost:4040/students");
    setData(result.data);
    const opt1 = await axios.get("http://localhost:4040/houses");
    setHouseData(opt1.data);
    const opt2 = await axios.get("http://localhost:4040/cities");
    setCityData(opt2.data);
    const opt3 = await axios.get("http://localhost:4040/departments");
    setDeptData(opt3.data);
  };

  const getDataFilt = async (payload) => {
    const result = await axios.post("http://localhost:4040/filt", payload);
    setData(result.data);
  };

  const postData = async (wrapper, payload) => {
    await axios.post(`http://localhost:4040/${wrapper}`, payload);
    getData();
  };
  const handleAddHouse = () => {
    postData("addhouse", { name: txtHouse });
    setTxtHouse("");
  };

  const handleSearch = () => {
    getDataFilt({ house, dept, city });
  };

  useEffect(() => {
    getDataFilt({ dept });
  }, [dept]);

  useEffect(() => {
    getDataFilt({ city });
  }, [city]);

  useEffect(() => {
    getDataFilt({ house });
  }, [house]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            value={txtHouse}
            onChange={(e) => setTxtHouse(e.target.value)}
            variant="outlined"
            label="add house"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" fullWidth onClick={handleAddHouse}>
            Add House
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Select options={houseData} onChange={(val) => setHouse(val.label)} />
        </Grid>
        <Grid item xs={3}>
          <Select options={cityData} onChange={(val) => setCity(val.label)} />
        </Grid>
        <Grid item xs={3}>
          <Select options={deptData} onChange={(val) => setDept(val.label)} />
        </Grid>
        <Grid item xs={3}>
          <Button onClick={handleSearch} variant="contained">
            Advance Search
          </Button>
        </Grid>
        {data.length > 0 && data.map((item) => <EmpItem item={item} />)}
      </Grid>
    </div>
  );
};
