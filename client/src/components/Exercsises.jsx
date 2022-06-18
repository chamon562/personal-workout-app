import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typgrophy, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExercisesCard from "./ExercisesCard";

const Exercsises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const inedexOfLastExercise = currentPage * exercisesPerPage;
  // idnex of first exercise
  const indexOfFirstExercise = inedexOfLastExercise - exercisesPerPage;
  // get current exercises
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    inedexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);

    // scroll to top page
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    // recall this anytime bodyPart changes
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      {/* the cards are inside the Stack */}
      <Stack
        direction="row"
        sx={{ gap: { lg: "120px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExercisesCard exercise={exercise} key={index} />
        ))}
      </Stack>
      {/* count is the number of pages it takes for each 9 exercises per page */}
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 ? (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        ) : (
          ""
        )}
      </Stack>
    </Box>
  );
};

export default Exercsises;
