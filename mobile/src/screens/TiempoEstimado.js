import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TiempoEstimado = ({ navigation }) => {
    const [selectedTime, setSelectedTime] = useState(null);

    const timeOptions = ['Menos de 1 hora', '1-3 horas', '3-6 horas', 'Más de 6 horas'];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Tiempo Estimado</Text>
            <Text style={styles.subheader}>Seleccione una estimación de tiempo</Text>
            <View style={styles.buttonContainer}>
                {timeOptions.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.timeButton,
                            selectedTime === option && styles.timeButtonSelected,
                        ]}
                        onPress={() => setSelectedTime(option)}
                    >
                        <Text style={styles.timeButtonText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.note}>Elige el tiempo estimado para la tarea</Text>
            
            <View style={styles.timeBreakdown}>
                <View style={styles.timeBox}>
                    <Text style={styles.timeLabel}>Tiempo Planificado</Text>
                    <Text style={styles.timeValue}>5 horas</Text>
                </View>
                <View style={styles.timeBox}>
                    <Text style={styles.timeLabel}>Tiempo Real Tomado</Text>
                    <Text style={styles.timeValue}>6 horas</Text>
                    <Text style={styles.difference}>+1 hora</Text>
                </View>
            </View>
            
            <View style={styles.buttonActions}>
                <TouchableOpacity style={styles.resetButton}>
                    <Text style={styles.buttonText}>Restablecer Estimación</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.buttonText}>Guardar Estimación</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subheader: {
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    timeButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
    },
    timeButtonSelected: {
        backgroundColor: '#000',
        borderColor: '#000',
    },
    timeButtonText: {
        color: '#333',
    },
    note: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#888',
    },
    timeBreakdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    timeBox: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginHorizontal: 5,
    },
    timeLabel: {
        fontSize: 14,
        color: '#666',
    },
    timeValue: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    difference: {
        fontSize: 14,
        color: '#d9534f',
    },
    buttonActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resetButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        padding: 10,
        flex: 1,
        marginRight: 10,
    },
    saveButton: {
        backgroundColor: '#000',
        borderRadius: 8,
        padding: 10,
        flex: 1,
        marginLeft: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
});

export default TiempoEstimado;
