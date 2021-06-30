import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const aboutusScreen = ({navigation}) => {
    return (
        
        <View style={styles.container}>
        <Text style={styles.titulo}>By</Text>
       
            
            <Text style={styles.texto}>Oscar Sanchez</Text>
            <Text style={styles.texto}>Jody Tai</Text>
           
        </View>
    ); 
};

export default  aboutusScreen;

const styles = StyleSheet.create({
    container: {
        padding: 4,
        backgroundColor: '#ededed',
        marginVertical: 4,
        display: 'flex',
        alignItems: 'center',
        
        
    },
    texto: {
        fontSize: 40,
        color: '#2946E7'
    },
    titulo: {
        fontSize: 55
    }
});