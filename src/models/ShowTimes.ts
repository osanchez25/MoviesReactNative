import Cinemas from "./Cinemas";

export default interface ShowTimes{
  MovieId: number;
  CinemaId: number;
  ShowTimeId: number;
  Format: string;
  Language: string;
  ShowDate: string;
  Cinema?: Cinemas[]
}