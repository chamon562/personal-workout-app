import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercsises from "../components/Exercsises";

const Home = () => {
  // changes in these states are here because they will be reflected all accross the application
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      {/* prop drilling */}
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercsises
        setExercises={setExercises}
        bodyPart={bodyPart}
        
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
