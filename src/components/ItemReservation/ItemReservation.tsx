import moment from 'moment';
import React, {Dispatch, SetStateAction} from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import { useReservation } from '../../context/reservations';
import IReservation from '../../models/Reservations';

interface ItemReservationProps {
  reservation: IReservation ,
}

const ItemReservation: React.FC<ItemReservationProps> = ({reservation}) => {
  const date = moment(reservation.showTime.ShowDate); 
  return (
    <TouchableOpacity  >
      <View style={{marginVertical: 12}}>
              <View style={{flexDirection: 'row', flex: 1 ,  marginLeft: 12}}>
                <Image
                  source={{
                    uri: reservation.movie.PosterUrl,
                  }}
                  resizeMode="cover"
                  style={{width: 100, height: 150, borderRadius: 10}}
                />
                <View style={{flex: 1, marginLeft: 12}}>
                  <View>
                    <Text style={{fontSize: 22, paddingRight: 16}}>
                      {reservation.movie.MovieName}
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
                      Entradas Reservadas : {reservation.amountTickets} 
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
                      Total: ${reservation.total}
                    </Text>
                      
                  
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 3,
                      alignItems: 'center',
                    }}>
                    
                    
                      <Text
                      style={{
                        fontSize: 18,
                       
                        color: '#000',
                      }}>
                      {date.calendar()}
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

export default ItemReservation;
