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

  //const {fetchUsuarios, usuarios} = useAuthentication();

  //console.log(albumSeleccionado);

//

//const image = { uri: ".\assets\backgrounds\popcorn-bk.png" };
//
    //<Text style={{fontSize: 22 , alignContent:'center' ,}}>Peliculas</Text>
  return (
   <View >
     
     {movieActual ? showTimeActual ? (<Reservation  />) : (<ListaShowTime movie={movieActual} />) : (<ListaMovie />)}
    
   </View>
  );
};





export default MovieContainer;
