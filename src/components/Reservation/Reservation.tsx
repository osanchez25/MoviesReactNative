import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, Text, Button, Image, StyleSheet, TextInput, Alert} from 'react-native';
import { useMovie } from '../../context/movies';
import { useReservation } from '../../context/reservations';
import { useShowTime } from '../../context/showTimes';
import ItemMovieReduced from '../ItemMovieReduced';
import ItemShowTime from '../ItemShowTime';
import IReservation from '../../models/Reservations';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Reservation = () => {

  const {setShowTimeActual,showTimeActual} = useShowTime();
  const {movieActual,setMovieActual} = useMovie();
  const {setReservationActual,reservations,setReservations} = useReservation();

  
  const [tickets, setTickets] = useState(1);
  const [number, onChangeNumber] = useState(null);


  const backPress = () => {
    setShowTimeActual(null);
  };


  const saveReservation = (reserva : IReservation) => {
    try{
     
    AsyncStorage.getItem('reservas', (err, result) => {
       
        if (result !== null) {
          console.log('Data Found', result);

          var listaReserva = JSON.parse(result!).concat(reserva);
          AsyncStorage.setItem('reservas', JSON.stringify(listaReserva));
          setReservations(listaReserva);
        } else {
          console.log('Data Not Found');
          var listaReservas : IReservation[] = [];
          listaReservas.push(reserva);
          AsyncStorage.setItem('reservas', JSON.stringify(listaReservas));
          setReservations(listaReservas);
       }
      });
      
}
catch(error){
    console.log(error);
}
    
};
  
  const reservarPress = () => {
    
    var reservation :IReservation = {
      reservationID : reservations? reservations.length+1: 1,
      amountTickets : number ? number! : 1,
      movie: movieActual!,
      showTime: showTimeActual!,
      price: 6,
      total: Number(number) * Number(6)
   };
   saveReservation(reservation);
   setMovieActual(null);
   setShowTimeActual(null);
  
  };


  
  return (
    <View>
      <Button title="Atrás" onPress={backPress}  />
      <ItemMovieReduced movie={movieActual!} />
      <ItemShowTime showTime={showTimeActual!} /> 

     
        <View style={styles.contenedor}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Numero de Entradas"
          keyboardType="numeric"
        />
            <Text >Tu total es de : $ {Number(number) * Number(6)}</Text>
          </View>

        
      


      <Button title="Reservar" onPress={reservarPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
  },
  contenedor: {
    padding: 4,
    backgroundColor: '#ededed',
    marginVertical: 4,
    display: 'flex',
    alignItems: 'center',
    marginTop: 12
  }
});



export default Reservation;
