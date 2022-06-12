import React, {useState} from 'react';
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercsises from '../components/Exercsises';


const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercsises />
    </Box>
  )
}

export default Home