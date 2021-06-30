import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, {Component} from 'react';
import aboutusScreen from "../screens/aboutusScreen";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MovieContainer from "../src/components/MovieContainer"
import ReservationContainer from "../src/components/ReservationContainer/ReservationContainer";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 5,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 50,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="Pelicula" component={MovieContainer} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alightItems: 'center', justifyContent: 'center', top:0}}>
                        <Image
                            source={require('../assets/icons/movie.png')}
                            resizeMode='contain'
                            style={{
                                width: 25, 
                                height: 25,
                                tintColor: focused? '#e32f45':'#748c94',
                                left: 10
                            }}
                            />
                            <Text
                            style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Peliculas</Text>
                    </View>
                )
            }

            } />
            <Tab.Screen name="Reserva" component={ReservationContainer} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alightItems: 'center', justifyContent: 'center', top:0}}>
                        <Image
                            source={require('../assets/icons/reservation.png')}
                            resizeMode='contain'
                            style={{
                                width: 25, 
                                height: 25,
                                tintColor: focused? '#e32f45':'#748c94',
                                left: 25
                            }}
                            />
                            <Text
                            style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Reservaciones</Text>
                    </View>
                )
            }
        } />


<Tab.Screen name="Aboutus" component={aboutusScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alightItems: 'center', justifyContent: 'center', top:0}}>
                        <Image
                            source={require('../assets/icons/aboutus.png')}
                            resizeMode='contain'
                            style={{
                                width: 25, 
                                height: 25,
                                tintColor: focused? '#e32f45':'#748c94',
                                left: 25
                            }}
                            />
                            <Text
                            style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Sobre Nosotros</Text>
                    </View>
                )
            }
        } />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;