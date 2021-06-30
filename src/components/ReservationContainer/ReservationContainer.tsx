import React, { useEffect } from 'react';
import {View} from 'react-native';
import { useReservation } from '../../context/reservations';
import ListaShowTime from '../ListaShowTime';
import { useShowTime } from '../../context/showTimes';
import Reservation from '../Reservation';
import ListaReservation from '../ListaReservation';

const ReservationContainer = () => {


  //const albumSeleccionado = null;



  
  const {fetchReservations, reservations,reservationActual} = useReservation();



  useEffect(() => {
    async function callFetchReservations() {
      await fetchReservations();
    }

    callFetchReservations();
  }, []);

  return (
   <View style={{marginBottom: 50}}>
     
     {<ListaReservation />}
    
   </View>
  );
};





export default ReservationContainer;
