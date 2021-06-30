import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {Button, FlatList, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import IMovie from '../../models/Movies';
import ItemMovie from '../ItemMovie';
import { useMovie } from '../../context/movies';
import { useShowTime } from '../../context/showTimes';
import ItemShowTime from '../ItemShowTime';
import ItemMovieReduced from '../ItemMovieReduced';

interface ItemMovieProps {
  movie: IMovie,
}

const ListaShowTime: React.FC<ItemMovieProps> = ({movie}) => {


  
  const {fetchShowTimes,showTimes} = useShowTime();
  const {setMovieActual} = useMovie();


  useEffect(() => {
    async function callFetchShowTimes() {
      await fetchShowTimes(String(movie.MovieId));
    }

    callFetchShowTimes();
  }, []);


  const handlePress = () => {
    setMovieActual(null)
  };

 

  return (
      <><Button title="Atrás" onPress={handlePress}  />
      <ItemMovieReduced movie={movie} />
      
        <FlatList
          data={showTimes}
          keyExtractor={item => item.ShowTimeId.toString()}
          renderItem={({ item }) => (
            <ItemShowTime showTime={item} />
          )} /></>
  );
};



export default ListaShowTime;
