import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Fortalezas = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Fortalezas y Debilidades</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Análisis de Puntos Clave</Text>
                <TouchableOpacity>
                    <Text style={styles.viewDetailsButton}>Ver detalles</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.analysisContainer}>
                <View style={styles.analysisBox}>
                    <Text style={styles.analysisTitle}>Técnica</Text>
                    <Text style={styles.analysisResult}>Fuerte</Text>
                    <Text style={styles.analysisChange}>N/A</Text>
                </View>
                <View style={styles.analysisBox}>
                    <Text style={styles.analysisTitle}>Resistencia</Text>
                    <Text style={styles.analysisResult}>Débil</Text>
                    <Text style={styles.analysisChange}>-10%</Text>
                </View>
                <View style={styles.analysisBox}>
                    <Text style={styles.analysisTitle}>Velocidad</Text>
                    <Text style={styles.analysisResult}>Fuerte</Text>
                    <Text style={styles.analysisChange}>+5%</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Opiniones de Entrenadores</Text>
                <TouchableOpacity>
                    <Text style={styles.viewDetailsButton}>Ver todas las opiniones</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.opinionBox}>
                <Text style={styles.opinionAuthor}>Entrenador A</Text>
                <Text style={styles.opinionText}>Excelente técnica y capacidad para mantener el ritmo.</Text>
            </View>

            <View style={styles.opinionBox}>
                <Text style={styles.opinionAuthor}>Entrenador B</Text>
                <Text style={styles.opinionText}>Necesita mejorar en la resistencia para las pruebas largas.</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Análisis Detallado</Text>
                <TouchableOpacity>
                    <Text style={styles.filterButton}>Filtrar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.detailContainer}>
                <View style={styles.detailRow}>
                    <Text style={styles.detailIcon}>✅</Text>
                    <Text style={styles.detailText}>Fortalezas - Técnicas de salida</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailIcon}>❌</Text>
                    <Text style={styles.detailText}>Debilidades - Resistencia en los últimos 50m</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    header: {
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewDetailsButton: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
    analysisContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    analysisBox: {
        width: '30%',
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    analysisTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    analysisResult: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    analysisChange: {
        fontSize: 12,
        color: '#888',
    },
    opinionBox: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    opinionAuthor: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    opinionText: {
        fontSize: 14,
        color: '#333',
    },
    filterButton: {
        color: '#28A745',
        fontWeight: 'bold',
    },
    detailContainer: {
        marginTop: 10,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    detailIcon: {
        fontSize: 18,
        marginRight: 10,
    },
    detailText: {
        fontSize: 14,
    },
});

export default Fortalezas;
