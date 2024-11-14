import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const PredictionScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Selección de grupo de edad */}
      <View style={styles.ageGroupContainer}>
        <Text style={styles.label}>Selecciona el grupo de edad</Text>
        <View style={styles.ageButtons}>
          <TouchableOpacity style={styles.ageButton}><Text style={styles.ageButtonText}>Menos de 10</Text></TouchableOpacity>
          <TouchableOpacity style={styles.ageButton}><Text style={styles.ageButtonText}>10-14</Text></TouchableOpacity>
          <TouchableOpacity style={styles.ageButton}><Text style={styles.ageButtonText}>15-19</Text></TouchableOpacity>
          <TouchableOpacity style={styles.ageButton}><Text style={styles.ageButtonText}>20-29</Text></TouchableOpacity>
          <TouchableOpacity style={styles.ageButton}><Text style={styles.ageButtonText}>30 y más</Text></TouchableOpacity>
        </View>
        <Text style={styles.subLabel}>Selecciona el grupo de edad adecuado</Text>
      </View>

      {/* Botón de Predicción */}
      <TouchableOpacity style={styles.predictButton}>
        <Text style={styles.predictButtonText}>Predecir Tiempo</Text>
      </TouchableOpacity>

      {/* Equipo de Natación Popular */}
      <View style={styles.gearContainer}>
        <Text style={styles.sectionTitle}>Equipo de Natación Mariposa Popular</Text>
        <TouchableOpacity style={styles.shopNow}>
          <Text style={styles.shopNowText}>Comprar Ahora</Text>
        </TouchableOpacity>

        <View style={styles.gearRow}>
          <View style={styles.gearBox}>
            <Text style={styles.gearLabel}>Más Vendido</Text>
            <Text style={styles.gearTitle}>Goggles Speedo</Text>
            <Text style={styles.gearDescription}>Speedo Butterfly Pro Goggles</Text>
            <Text style={styles.gearPrice}>$24.99</Text>
          </View>
          <View style={styles.gearBox}>
            <Text style={styles.gearLabel}>Nuevo</Text>
            <Text style={styles.gearTitle}>Traje TYR</Text>
            <Text style={styles.gearDescription}>TYR Traje Mariposa</Text>
            <Text style={styles.gearPrice}>$49.99</Text>
          </View>
        </View>
      </View>

      {/* Métricas de Rendimiento */}
      <View style={styles.metricsContainer}>
        <Text style={styles.sectionTitle}>Tus Métricas de Rendimiento</Text>
        <TouchableOpacity style={styles.viewAll}>
          <Text style={styles.viewAllText}>Ver Todo</Text>
        </TouchableOpacity>

        <View style={styles.metricRow}>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Mejor Tiempo Mariposa</Text>
            <Text style={styles.metricValue}>1:05</Text>
            <Text style={styles.metricChange}>-0:02</Text>
          </View>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Frecuencia de Brazada</Text>
            <Text style={styles.metricValue}>35 brazadas/min</Text>
          </View>
        </View>
      </View>

      {/* Últimas Publicaciones de la Comunidad */}
      <View style={styles.communityContainer}>
        <Text style={styles.sectionTitle}>Últimas Publicaciones de la Comunidad</Text>
        <TouchableOpacity style={styles.readMore}>
          <Text style={styles.readMoreText}>Leer Más</Text>
        </TouchableOpacity>

        <View style={styles.postBox}>
          <Text style={styles.postUser}>SwimFan123</Text>
          <Text style={styles.postTime}>2h - Piscina</Text>
          <Text style={styles.postContent}>¡Nuevo tiempo récord hoy! ¡Muy emocionado por mejorar!</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  ageGroupContainer: { marginBottom: 16 },
  label: { fontSize: 16, fontWeight: 'bold' },
  ageButtons: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 8 },
  ageButton: { backgroundColor: '#ddd', padding: 8, borderRadius: 8, marginRight: 8, marginBottom: 8 },
  ageButtonText: { fontSize: 14 },
  subLabel: { fontSize: 12, color: '#777' },
  predictButton: { backgroundColor: '#000', padding: 12, borderRadius: 8, alignItems: 'center', marginVertical: 16 },
  predictButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  gearContainer: { marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  shopNow: { alignSelf: 'flex-end' },
  shopNowText: { color: '#007bff' },
  gearRow: { flexDirection: 'row', justifyContent: 'space-between' },
  gearBox: { flex: 1, padding: 8, borderWidth: 1, borderColor: '#ddd', marginHorizontal: 4, borderRadius: 8 },
  gearLabel: { fontSize: 12, color: '#ff6347' },
  gearTitle: { fontSize: 14, fontWeight: 'bold' },
  gearDescription: { fontSize: 12, color: '#555' },
  gearPrice: { fontSize: 14, fontWeight: 'bold', color: '#000' },
  metricsContainer: { marginBottom: 16 },
  viewAll: { alignSelf: 'flex-end' },
  viewAllText: { color: '#007bff' },
  metricRow: { flexDirection: 'row', justifyContent: 'space-between' },
  metricBox: { flex: 1, alignItems: 'center', padding: 8, borderWidth: 1, borderColor: '#ddd', marginHorizontal: 4, borderRadius: 8 },
  metricLabel: { fontSize: 12, color: '#555' },
  metricValue: { fontSize: 18, fontWeight: 'bold' },
  metricChange: { fontSize: 12, color: '#28a745', marginTop: 4 },
  communityContainer: { marginBottom: 16 },
  readMore: { alignSelf: 'flex-end' },
  readMoreText: { color: '#007bff' },
  postBox: { padding: 8, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, marginTop: 8 },
  postUser: { fontSize: 14, fontWeight: 'bold' },
  postTime: { fontSize: 12, color: '#555' },
  postContent: { fontSize: 14, color: '#333', marginTop: 4 },
});

export default PredictionScreen;
