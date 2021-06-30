import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import IMovie from '../../models/Movies';

interface ItemMovieProps {
    movie: IMovie ,
  }
  
  const ItemMovieReduced: React.FC<ItemMovieProps> = ({movie}) => {

    return (
        <TouchableOpacity  style={styles.contenedor}  >
      <Image style={styles.image} source={{uri: movie.PosterUrl}} />
      <Text style={styles.text}>{movie.MovieName}</Text>
        
      </TouchableOpacity>
    );
  };



  const styles = StyleSheet.create({
    contenedor: {
      padding: 8,
      
      marginVertical: 4,
      display: 'flex',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      color: '#748C94',
      display: 'flex',
      alignItems: 'center'
    },
    image: {
      width: 50,
      height: 50,
    },
  });

export default ItemMovieReduced;