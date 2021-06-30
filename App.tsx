import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";

import {MovieProvider} from './src/context/movies';
import {ShowTimeProvider} from './src/context/showTimes';
import {ReservationProvider} from './src/context/reservations';
import MovieContainer from './src/components/MovieContainer';

const App = () => {
  return (
    <MovieProvider>
      <ShowTimeProvider>
         <ReservationProvider>
       
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
        </ReservationProvider>
      </ShowTimeProvider>
    </MovieProvider>
  );
}

export default App;