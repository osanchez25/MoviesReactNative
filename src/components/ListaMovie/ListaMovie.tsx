import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import ItemMovie from '../ItemMovie';
import { useMovie } from '../../context/movies';


const ListaMovie = () => {

  const {movies} = useMovie();
  

  return (
    <View style={{ marginTop: 12}}>
    <FlatList
      data={movies}
      keyExtractor={item => item.MovieKey.toString()}
      renderItem={({item}) => (
        <ItemMovie movie={item}   />
      )}
    />
    </View>
  );
};

export default ListaMovie;
