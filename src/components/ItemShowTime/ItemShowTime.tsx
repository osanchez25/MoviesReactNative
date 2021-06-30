import moment from 'moment';
import React, {Dispatch, SetStateAction} from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useShowTime } from '../../context/showTimes';
import IShowTime from '../../models/ShowTimes';

interface ItemShowTimeProps {
  showTime: IShowTime;
}

const ItemShowTime: React.FC<ItemShowTimeProps> = ({showTime}) => {
  
  const {setShowTimeActual} = useShowTime();
  
  const manejarPress = () => {

    
      setShowTimeActual(showTime)
   
    //setAlbumSeleccionado(album);
    //dispatch(actualizarAlbumSeleccionado(album));
  };


  const date = moment(showTime.ShowDate); 
  const cinema = showTime.Cinema  ? showTime.Cinema[0].CinemaName : "ND";
  //const imageURL = movie.PosterUrl ? movie.PosterUrl : '';
  return (
    <TouchableOpacity onPress={manejarPress} style={styles.contenedor}>
    
    

      <Text style={styles.text}>Fecha : {date.calendar()}</Text>
      <Text style={styles.text}>{cinema}</Text>
      <Text style={styles.text}>Lenguaje: {showTime.Language} </Text>
      <Text style={styles.text}>Formato: {showTime.Format} </Text>

    </TouchableOpacity>
  );
};
//#748C94
//#E32F45
const styles = StyleSheet.create({
  contenedor: {
    padding: 4,
    backgroundColor: '#ededed',
    marginVertical: 4,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: '#748C94',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ItemShowTime;
