import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';

const ConfigScreen = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

    // Función para alternar entre temas claro y oscuro
    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

    // Función para restablecer configuraciones
    const resetSettings = () => {
        Alert.alert(
            "Restablecer Configuración",
            "¿Estás seguro de que deseas restablecer todas las configuraciones a sus valores predeterminados?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Aceptar",
                    onPress: () => {
                        setIsDarkMode(false);
                        setIsNotificationsEnabled(true);
                        Alert.alert("Configuración Restablecida", "Se han restablecido las configuraciones.");
                    },
                },
            ]
        );
    };

    // Estilos dinámicos según el modo oscuro
    const dynamicStyles = {
        container: {
            ...styles.container,
            backgroundColor: isDarkMode ? '#333' : '#fff',
        },
        title: {
            ...styles.title,
            color: isDarkMode ? '#fff' : '#333',
        },
        optionText: {
            ...styles.optionText,
            color: isDarkMode ? '#fff' : '#333',
        },
        resetButton: {
            ...styles.resetButton,
            backgroundColor: isDarkMode ? '#ff5c5c' : '#ff7b7b',
        },
        resetButtonText: {
            ...styles.resetButtonText,
            color: isDarkMode ? '#333' : '#fff',
        },
    };

    return (
        <View style={dynamicStyles.container}>
            <Text style={dynamicStyles.title}>Configuración</Text>

            {/* Opción: Modo oscuro */}
            <View style={styles.optionContainer}>
                <Text style={dynamicStyles.optionText}>Modo Oscuro</Text>
                <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
            </View>

            {/* Opción: Notificaciones */}
            <View style={styles.optionContainer}>
                <Text style={dynamicStyles.optionText}>Habilitar Notificaciones</Text>
                <Switch
                    value={isNotificationsEnabled}
                    onValueChange={(value) => setIsNotificationsEnabled(value)}
                />
            </View>

            {/* Botón: Restablecer configuración */}
            <TouchableOpacity style={dynamicStyles.resetButton} onPress={resetSettings}>
                <Text style={dynamicStyles.resetButtonText}>Restablecer Configuración</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    optionText: {
        fontSize: 18,
    },
    resetButton: {
        marginTop: 30,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    resetButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ConfigScreen;
