import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import ItemReservation from '../ItemReservation';
import {useReservation } from '../../context/reservations';


const ListaReservation = () => {

  const {reservations} = useReservation();
  

  return (
    <View style={{ marginTop: 12}}>
    <FlatList
      data={reservations}
      keyExtractor={item => item.reservationID.toString()}
      renderItem={({item}) => (
        <ItemReservation reservation={item}   />
      )}
    />
    </View>
  );
};

export default ListaReservation;
