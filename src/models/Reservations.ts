import IMovie from './Movies';
import IShowTime from './ShowTimes';


export default interface Reservations{
    reservationID : number
    movie : IMovie,
    showTime : IShowTime,
    amountTickets : number,
    price : number,
    total : number 
}