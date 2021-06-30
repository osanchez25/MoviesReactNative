import React, { useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import { useMovie } from '../../context/movies';
//import { useSelector } from 'react-redux';
import IAlbum from '../../models/Movies';
//import State from '../../models/State';
import AlbumDetalle from '../Reservation';
import ListaMovie from '../ListaMovie';
import ListaShowTime from '../ListaShowTime';
import { useShowTime } from '../../context/showTimes';
import Reservation from '../Reservation';
import { useReservation } from '../../context/reservations';

const MovieContainer = () => {


  //const albumSeleccionado = null;



  
  const {fetchMovies, movies, movieActual} = useMovie();
 
  const {showTimeActual} = useShowTime();

  //console.log(movies);

  useEffect(() => {
    async function callFetchMovies() {
      await fetchMovies();
     
    }

    callFetchMovies();
  }, []);


  return (
   <View style={{marginBottom:50}} >
     
     {movieActual ? showTimeActual ? (<Reservation  />) : (<ListaShowTime movie={movieActual} />) : (<ListaMovie />)}
    
   </View>
  );
};





export default MovieContainer;
