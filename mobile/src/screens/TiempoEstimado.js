import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TiempoEstimado = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tiempo Estimado</Text>
            <Text style={styles.description}>
                Esta pantalla muestra el tiempo estimado para completar una prueba en natación, basado en los datos de entrenamiento.
            </Text>
            {/* Aquí puedes agregar más elementos de UI o lógica para mostrar datos específicos */}
            
            {/* Botón de regreso a la pantalla de inicio */}
            <Button title="Volver al inicio" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        color: '#555',
    },
});

export default TiempoEstimado;
