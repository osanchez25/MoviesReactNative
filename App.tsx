/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
 } from 'react-native';
 import {MovieProvider} from './src/context/movies';
 import {ShowTimeProvider} from './src/context/showTimes';
 import {ReservationProvider} from './src/context/reservations';
 import MovieContainer from './src/components/MovieContainer';

 const App = () => {

  return (
    <MovieProvider>
      <ShowTimeProvider>
         <ReservationProvider>
        <SafeAreaView >
          <MovieContainer/>     
        </SafeAreaView>
        </ReservationProvider>
      </ShowTimeProvider>
    </MovieProvider>
   
  );
};


const styles = StyleSheet.create({
 
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
/*
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
*/
 export default App;
