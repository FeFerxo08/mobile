import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    // Array con el texto específico para cada botón
    const buttonTexts = [
        "Tiempo estimado", 
        "Comparación con Benchmarks", 
        "Predicción en Competencia", 
        "Predicción de Tiempo",
        "Fortalezas y debilidades", 
        "Comparación de estilos con Benchmarks", 
        "Tiempo estimado de estilo", 
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla de Inicio</Text>
            <View style={styles.grid}>
                {buttonTexts.map((text, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={() => navigation.navigate(`Screen${index + 1}`)}
                    >
                        <Text style={styles.buttonText}>{text}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        width: '40%',
        height: 80,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
