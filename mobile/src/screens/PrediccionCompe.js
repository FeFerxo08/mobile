import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const PrediccionCompe = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Predicciones en Competencias</Text>
                <Text style={styles.headerSubtitle}>Equipo de Predicciones</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Próximos Partidos</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAllButton}>Ver todos</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.matchCard}>
                <Text style={styles.matchTitle}>Partido A</Text>
                <Text style={styles.matchTeams}>Equipo X vs Equipo Y</Text>
                <View style={styles.tagContainer}>
                    <Text style={styles.tag}>Predicción</Text>
                    <Text style={styles.tag}>Análisis</Text>
                </View>
                <Text style={styles.matchDescription}>
                    Partido emocionante con el Equipo X como favorito para ganar basado en el rendimiento reciente.
                </Text>
                <Text style={styles.expertText}>Experto A</Text>
            </View>

            <View style={styles.matchCard}>
                <Text style={styles.matchTitle}>Partido B</Text>
                <Text style={styles.matchTeams}>Equipo Z vs Equipo W</Text>
                <View style={styles.tagContainer}>
                    <Text style={styles.tag}>Vista previa</Text>
                    <Text style={styles.alertTag}>Alerta de sorpresa</Text>
                </View>
                <Text style={styles.matchDescription}>
                    Se espera un partido reñido con potencial de resultados inesperados. Ambos equipos tienen una fuerte defensa.
                </Text>
                <Text style={styles.expertText}>Experto B</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Paquetes de Predicciones</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAllButton}>Explorar paquetes</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.packageContainer}>
                <View style={styles.packageCard}>
                    <Text style={styles.packageTitle}>Premium</Text>
                    {/* Aquí podrías agregar una imagen */}
                    <Text style={styles.packageInfo}>Predicción VIP</Text>
                    <Text style={styles.packageAccuracy}>70% de precisión</Text>
                </View>
                <View style={styles.packageCard}>
                    <Text style={styles.packageTitle}>Popular</Text>
                    {/* Aquí podrías agregar una imagen */}
                    <Text style={styles.packageInfo}>Consejos diarios</Text>
                    <Text style={styles.packageAccuracy}>Predicciones combinadas</Text>
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
        marginBottom: 5,
    },
    headerSubtitle: {
        textAlign: 'center',
        color: '#666',
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
    viewAllButton: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
    matchCard: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    matchTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    matchTeams: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
    tagContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    tag: {
        backgroundColor: '#ddd',
        padding: 5,
        borderRadius: 5,
        marginRight: 5,
    },
    alertTag: {
        backgroundColor: '#FFC107',
        padding: 5,
        borderRadius: 5,
    },
    matchDescription: {
        fontSize: 14,
        color: '#333',
        marginBottom: 10,
    },
    expertText: {
        fontStyle: 'italic',
        color: '#555',
        textAlign: 'right',
    },
    packageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    packageCard: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 10,
        width: '48%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    packageTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    packageInfo: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    packageAccuracy: {
        fontSize: 14,
        color: '#28A745',
        fontWeight: 'bold',
    },
});

export default PrediccionCompe;
