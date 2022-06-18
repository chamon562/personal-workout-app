import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { exerciseOptions } from "../utils/fetchData";

const ExercisesCard = ({ exercise }) => {
  console.log(exercise);
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      {/* loading="lazy" * means it will not load immediatly */}
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          className="exercise-btn"
          sx={{
            ml: "21px",
            color: "#5DBAE8",
            border: "2px solid #5DBAE8",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            "&:hover": {
              color: "white",
              background: "#5DBAE8",
            },
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          className="exercise-btn"
          sx={{
            ml: "21px",
            color: "#a9aaff",
            border: "2px solid #a9aaff",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            '&:hover': {
                color: 'white',
                background: '#a9aaff'
            }
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#5DBAE8"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="20px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExercisesCard;
