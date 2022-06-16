import { responsiveProperty } from "@mui/material/styles/cssUtils";
export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_EXERCISE_API_KEY,
  },
};

// make connection with rapid api
// this is an abstraction of a function thats going to actually fetch the data
// because we can see that have 2 parameters but didnt pass in any real data
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
