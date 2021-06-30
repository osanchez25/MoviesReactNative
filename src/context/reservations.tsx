// High Order Component o HOC
import axios from 'axios';
import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IReservation from '../models/Reservations';

interface ReservationsContextProps {
  reservationActual:  IReservation | null;
  setReservationActual: (reservation: IReservation | null) => void;
  reservations: IReservation[];
  setReservations: (reservations: IReservation[]) => void;
  fetchReservations: () => Promise<void>;
}

const ReservationContext = createContext<ReservationsContextProps>({
  reservationActual: null,
  reservations: [],
  setReservationActual: () => {},
  setReservations: () => {},
  fetchReservations: () => new Promise(() => {}),
});

export const ReservationProvider: React.FC = ({children}) => {
  const [reservationActual, setReservationActual] = useState<IReservation | null>(null);
  const [reservations, setReservations] = useState<IReservation[]>([]);

  const fetchReservations = async () => {


    try{
      let listaReservas = await AsyncStorage.getItem('reservas');
      let reservations =(JSON.parse(listaReservas!)) as  IReservation[];
      setReservations(reservations);
      }
      catch(error){
        console.log(error);
      }

 
  };

  const val = {
    reservationActual,
    reservations,
    setReservationActual,
    setReservations,
    fetchReservations,
  };

  return (
    <ReservationContext.Provider value={val}>
      
         {children}
     
      
    </ReservationContext.Provider>
  );
};

export const useReservation = () => useContext(ReservationContext);
