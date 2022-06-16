import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = () => {
  // bory parts url: https://exercisedb.p.rapidapi.com/exercises/bodyPartList
  // over 1k + exercsies url:"https://exercisedb.p.rapidapi.com/exercises",

  const [search, setSearch] = useState("");

  // this search will be asynchronous because we are going to be fetchign data form it
  // its going to take some time to pull some data from the api
  const handleSearch = async () => {
    if (search) {
      // if the search exist fetch the exercise data
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      console.log(exerciseData);
      // create fetch data utility function
      // create utils folder and this will be the folder that stores functions to be used across the code
    }
  };
  return (
    <Stack alignItems="center" mt="38px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "48px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Great Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", sm: "350px" },
            backgroundColor: "#fff",
            borderRadius: "4px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#5DBAE8",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "16px", xs: "12px" },
            height: "55px",
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
