import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const ProgressScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Encabezado con nombre */}
      <View style={styles.headerContainer}>
        <Text style={styles.userName}>Juan Pérez</Text>
        <Text style={styles.userStatus}>Seguimiento de tus metas</Text>
      </View>

      {/* Progreso General */}
      <View style={styles.progressContainer}>
        <Text style={styles.sectionTitle}>Progreso General</Text>
        <View style={styles.progressRow}>
          <View style={styles.progressBox}>
            <Text style={styles.progressLabel}>Tareas Completadas</Text>
            <Text style={styles.progressValue}>75</Text>
            <Text style={styles.progressChange}>+5%</Text>
          </View>
          <View style={styles.progressBox}>
            <Text style={styles.progressLabel}>Tareas Restantes</Text>
            <Text style={styles.progressValue}>25</Text>
          </View>
        </View>
      </View>

      {/* Próximos Pasos */}
      <View style={styles.nextStepsContainer}>
        <Text style={styles.sectionTitle}>Próximos Pasos</Text>
        <View style={styles.stepRow}>
          <Text style={styles.stepText}>Programar próxima revisión</Text>
          <Text style={styles.stepDate}>Fecha límite: 15 de mayo</Text>
        </View>
        <View style={styles.stepRow}>
          <Text style={styles.stepText}>Establecer nueva meta</Text>
          <Text style={styles.stepDate}>Objetivo: 30 de junio</Text>
        </View>
      </View>

      {/* Galería de Metas */}
      <View style={styles.galleryContainer}>
        <Text style={styles.galleryText}>Galería de Metas</Text>
        <View style={styles.galleryPlaceholder}>
          <Text style={styles.galleryPlaceholderText}>Galería de Metas</Text>
        </View>
      </View>

      {/* Retroalimentación de Usuarios */}
      <View style={styles.feedbackContainer}>
        <Text style={styles.sectionTitle}>Retroalimentación de Usuarios</Text>
        <View style={styles.feedbackRow}>
          <View style={styles.feedbackBox}>
            <Text style={styles.feedbackUser}>Ana López</Text>
            <Text style={styles.feedbackComment}>¡Gran herramienta para seguir el progreso!</Text>
            <Text style={styles.feedbackIcons}>❤️ 👏</Text>
          </View>
          <View style={styles.feedbackBox}>
            <Text style={styles.feedbackUser}>Carlos Sánchez</Text>
            <Text style={styles.feedbackComment}>Me ayuda a mantenerme enfocado en mis objetivos.</Text>
            <Text style={styles.feedbackIcons}>💪 👍</Text>
          </View>
        </View>
      </View>

      {/* Botones de Acción */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Compartir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Imprimir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exportButton}>
          <Text style={styles.exportButtonText}>Exportar Progreso</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  headerContainer: { alignItems: 'center', marginBottom: 16 },
  userName: { fontSize: 18, fontWeight: 'bold' },
  userStatus: { fontSize: 14, color: '#555' },
  progressContainer: { marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between' },
  progressBox: { flex: 1, alignItems: 'center', padding: 8, borderWidth: 1, borderColor: '#ddd', marginHorizontal: 4, borderRadius: 8 },
  progressLabel: { fontSize: 12, color: '#555' },
  progressValue: { fontSize: 18, fontWeight: 'bold' },
  progressChange: { fontSize: 12, color: '#28a745', marginTop: 4 },
  nextStepsContainer: { marginBottom: 16 },
  stepRow: { marginBottom: 8 },
  stepText: { fontSize: 14, fontWeight: 'bold' },
  stepDate: { fontSize: 12, color: '#888' },
  galleryContainer: { alignItems: 'center', marginBottom: 16 },
  galleryText: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  galleryPlaceholder: { width: '100%', height: 150, backgroundColor: '#f0f0f0', alignItems: 'center', justifyContent: 'center', borderRadius: 8 },
  galleryPlaceholderText: { fontSize: 14, color: '#aaa' },
  feedbackContainer: { marginBottom: 16 },
  feedbackRow: { flexDirection: 'row', justifyContent: 'space-between' },
  feedbackBox: { flex: 1, padding: 8, borderWidth: 1, borderColor: '#ddd', marginHorizontal: 4, borderRadius: 8 },
  feedbackUser: { fontSize: 14, fontWeight: 'bold' },
  feedbackComment: { fontSize: 12, color: '#555' },
  feedbackIcons: { fontSize: 14, marginTop: 4 },
  actionsContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 16 },
  actionButton: { paddingVertical: 8, paddingHorizontal: 16, backgroundColor: '#ddd', borderRadius: 8 },
  actionButtonText: { fontSize: 14 },
  exportButton: { paddingVertical: 8, paddingHorizontal: 16, backgroundColor: '#000', borderRadius: 8 },
  exportButtonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
});

export default ProgressScreen;
