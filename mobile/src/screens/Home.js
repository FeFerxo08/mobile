import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    // Array con el texto específico para cada botón y sus destinos
    const buttons = [
        { text: "Tiempo estimado", screen: "TiempoEstimado" },
        { text: "Comparación con Benchmarks", screen: "ComparisonScreen" },
        { text: "Predicción en Competencia", screen: "PrediccionCompe" },
        { text: "Predicción de Tiempo", screen: "PredictionScreen" },
        { text: "Fortalezas y debilidades", screen: "Fortalezas" },
        { text: "Progresos", screen: "ProgressScreen" },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla de Inicio</Text>
            <View style={styles.grid}>
                {buttons.map((button, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={() => navigation.navigate(button.screen)}
                    >
                        <Text style={styles.buttonText}>{button.text}</Text>
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
