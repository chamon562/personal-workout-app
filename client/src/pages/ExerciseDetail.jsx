import React, { useState, useEffect } from "react";
// useParams to determine the id of the exercise currently on
// to fetch aditional data
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
// utility function
import {
  exerciseOptions,
  youtubeSearchUrl,
  fetchData,
  youtubeOptions,
} from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimliarExercises from "../components/SimliarExercises";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  // this will give us access to the number in the url when users click a specific workout
  const { id } = useParams();

  useEffect(() => {
    // recall this function everytime id changes from the user clicking a specific workout
    const fetchExercisesData = async () => {
      // base url of api
      const exerciseDBUrl = "https://exercisedb.p.rapidapi.com";
      // fetching exercise detail data
      const exerciseDetailData = await fetchData(
        `${exerciseDBUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      // api for videos youtube search and download video
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExerciseData = await fetchData(
        `${exerciseDBUrl}/exercises/target/${exerciseDetail.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExerciseData);

      const equipmentExerciseData = await fetchData(
        `${exerciseDBUrl}/exercises/equipment/${exerciseDetail.equipment}`,
        exerciseOptions
      );

      setEquipmentExercises(equipmentExerciseData);
    };
    fetchExercisesData();
  }, [id]);
  console.log(exerciseVideos);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimliarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetails;
