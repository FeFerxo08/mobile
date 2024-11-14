import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    // Array con el texto específico para cada botón, íconos y destinos
    const buttons = [
        { text: "Tiempo estimado", screen: "TiempoEstimado", icon: "time-outline" },
        { text: "Comparación con Benchmarks", screen: "ComparisonScreen", icon: "stats-chart-outline" },
        { text: "Predicción en Competencia", screen: "PrediccionCompe", icon: "trophy-outline" },
        { text: "Predicción de Tiempo", screen: "PredictionScreen", icon: "timer-outline" },
        { text: "Fortalezas y debilidades", screen: "Fortalezas", icon: "analytics-outline" },
        { text: "Progresos", screen: "ProgressScreen", icon: "barbell-outline" },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla de Inicio</Text>
            <ScrollView contentContainerStyle={styles.grid}>
                {buttons.map((button, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={() => navigation.navigate(button.screen)}
                    >
                        <Ionicons name={button.icon} size={28} color="#000000" style={styles.icon} />
                        <Text style={styles.buttonText}>{button.text}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        width: '45%',
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        paddingVertical: 20,
        borderRadius: 12,
        elevation: 3, // Sombra para darle profundidad
    },
    icon: {
        marginBottom: 8,
    },
    buttonText: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default HomeScreen;
