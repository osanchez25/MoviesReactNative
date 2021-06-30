// High Order Component o HOC
import axios from 'axios';
import React, {createContext, useContext, useEffect, useState} from 'react';
import IMovie from '../models/Movies';

interface MoviesContextProps {
  movieActual:  IMovie | null;
  setMovieActual: (movie: IMovie | null) => void;
  movies: IMovie[];
  setMovies: (movies: IMovie[]) => void;
  fetchMovies: () => Promise<void>;
}

const MovieContext = createContext<MoviesContextProps>({
  movieActual: null,
  movies: [],
  setMovieActual: () => {},
  setMovies: () => {},
  fetchMovies: () => new Promise(() => {}),
});

export const MovieProvider: React.FC = ({children}) => {
  const [movieActual, setMovieActual] = useState<IMovie | null>(null);
  const [movies, setMovies] = useState<IMovie[]>([]);

  const fetchMovies = async () => {
    try {
      const movies = await axios.get(
        'https://movieextractions.azurewebsites.net/api/movies',
      );

    
      setMovies(movies.data);


    } catch (error) {
      console.log(error);
    }
  };

  const val = {
    movieActual,
    movies,
    setMovieActual,
    setMovies,
    fetchMovies,
  };

  return (
    <MovieContext.Provider value={val}>
      
         {children}
     
      
    </MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext);
