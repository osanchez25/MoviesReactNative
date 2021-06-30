import React, {Dispatch, SetStateAction} from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import { useMovie } from '../../context/movies';
import IMovie from '../../models/Movies';

interface ItemMovieProps {
  movie: IMovie ,
}

const ItemMovie: React.FC<ItemMovieProps> = ({movie}) => {
  
  const {setMovieActual} = useMovie();
  
  const manejarPress = () => {
    setMovieActual(movie);
    //setAlbumSeleccionado(album);
    //dispatch(actualizarAlbumSeleccionado(album));
  };


/*

<Image style={styles.image} source={{uri: imageURL}} />
      <Text style={styles.text}>{movie.MovieName}</Text>
      <Text style={styles.text}>Calificacion: {movie.Rating}</Text>
      <Text style={styles.text}>Duracion: {movie.RunTime} m</Text>
*/

  const imageURL = movie.PosterUrl ? movie.PosterUrl : '';
  return (
    <TouchableOpacity onPress={manejarPress} >
      <View style={{marginVertical: 12}}>
              <View style={{flexDirection: 'row', flex: 1 ,  marginLeft: 12}}>
                <Image
                  source={{
                    uri: imageURL,
                  }}
                  resizeMode="cover"
                  style={{width: 100, height: 150, borderRadius: 10}}
                />
                <View style={{flex: 1, marginLeft: 12}}>
                  <View>
                    <Text style={{fontSize: 22, paddingRight: 16}}>
                      {movie.MovieName}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      alignItems: 'center',
                    }}>
                    
                    <Text
                      style={{
                        fontSize: 18,
                        
                        color: '#64676D',
                      }}>
                      Duracion : {movie.RunTime} m 
                    </Text>
                    
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      alignItems: 'center',
                    }}>
                    
                    
                      <Text
                      style={{
                        fontSize: 18,
                       
                        color: '#64676D',
                      }}>
                      Calificacion: {movie.Rating}
                    </Text>
                      
                  
                  </View>
                </View>
              </View>
            </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    padding: 8,
    backgroundColor: '#000',
    marginVertical: 4,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ItemMovie;
