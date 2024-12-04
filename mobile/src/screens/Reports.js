import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

const ReportsScreen = () => {
    const [reports, setReports] = useState([]); // Almacena los datos de los reportes
    const [loading, setLoading] = useState(true); // Manejo de estado de carga
    const [error, setError] = useState(null); // Manejo de errores

    // Obtener reportes desde el backend
    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get('http://<backend-url>/reports', {
                    headers: {
                        Authorization: `Bearer <TOKEN>`, // Si es necesario, incluye el token de autenticación
                    },
                });
                setReports(response.data); // Almacena los datos obtenidos
            } catch (err) {
                setError('Error al obtener los reportes.');
                console.error(err);
            } finally {
                setLoading(false); // Termina el estado de carga
            }
        };

        fetchReports();
    }, []);

    // Mostrar indicador de carga mientras los datos se están obteniendo
    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Cargando reportes...</Text>
            </View>
        );
    }

    // Mostrar mensaje de error si la solicitud falla
    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    // Renderizar cada reporte
    const renderReport = ({ item }) => (
        <View style={styles.reportCard}>
            <Text style={styles.reportTitle}>{item.title}</Text>
            <Text style={styles.reportDate}>Fecha: {item.date}</Text>
            <Text style={styles.reportDescription}>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reportes</Text>
            <FlatList
                data={reports} // Datos obtenidos del backend
                keyExtractor={(item, index) => index.toString()} // Clave única para cada elemento
                renderItem={renderReport} // Renderiza cada reporte
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#000000',
    },
    list: {
        paddingBottom: 20,
    },
    reportCard: {
        backgroundColor: '#f8f8f8',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 3,
    },
    reportTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333333',
    },
    reportDate: {
        fontSize: 14,
        marginBottom: 5,
        color: '#555555',
    },
    reportDescription: {
        fontSize: 14,
        color: '#666666',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ReportsScreen;
