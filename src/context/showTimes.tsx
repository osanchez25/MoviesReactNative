// High Order Component o HOC
import axios from 'axios';
import React, {createContext, useContext, useEffect, useState} from 'react';
import IShowTime from '../models/ShowTimes';
import ICinema from '../models/Cinemas';

interface ShowTimesContextProps {
  showTimeActual:  IShowTime | null;
  setShowTimeActual: (movie: IShowTime | null) => void;
  showTimes: IShowTime[];
  setShowTimes: (movies: IShowTime[]) => void;
  fetchShowTimes: (movieID: string) => Promise<void>;
}

const ShowTimeContext = createContext<ShowTimesContextProps>({
  showTimeActual: null,
  showTimes: [],
  setShowTimeActual: () => {},
  setShowTimes: () => {},
  fetchShowTimes: (movieID: string) => new Promise(() => {}),
});

export const ShowTimeProvider: React.FC = ({children}) => {
  const [showTimeActual, setShowTimeActual] = useState<IShowTime | null>(null);
  const [showTimes, setShowTimes] = useState<IShowTime[]>([]);

  const fetchShowTimes = async (movieID: string) => {
    try {
      
      const showTimes = await axios.get(
        'https://movieextractions.azurewebsites.net/api/showtimes/'+movieID ,
      );

      const cinemas = await axios.get(
        'https://movieextractions.azurewebsites.net/api/cinemas',
      );

      const showTimeFixed = showTimes.data.map((showTime: IShowTime) => {
        return {
          ...showTime,
          Cinema: cinemas.data.filter((cinema: ICinema ) => {
            return showTime.CinemaId === cinema.CinemaId;
          }),
        };
      });
      
      setShowTimes(showTimeFixed);


    } catch (error) {
      console.log(error);
    }
  };

  const val = {
    showTimeActual,
    showTimes,
    setShowTimeActual,
    setShowTimes,
    fetchShowTimes,
  };

  return (
    <ShowTimeContext.Provider value={val}>
      {children}
    </ShowTimeContext.Provider>
  );
};

export const useShowTime = () => useContext(ShowTimeContext);
