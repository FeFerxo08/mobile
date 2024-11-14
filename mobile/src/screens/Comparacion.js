import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ComparisonScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Comparison with Benchmarks</Text>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Metrics</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Trends</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Comparisons</Text></TouchableOpacity>
      </View>

      {/* Key Performance Indicators */}
      <View style={styles.kpiContainer}>
        <Text style={styles.kpiTitle}>Key Performance Indicators</Text>
        <TouchableOpacity style={styles.viewDetails}>
          <Text style={styles.viewDetailsText}>View Details</Text>
        </TouchableOpacity>

        <View style={styles.kpiRow}>
          <View style={styles.kpiBox}>
            <Text style={styles.kpiValue}>$500,000</Text>
            <Text style={styles.kpiLabel}>Revenue</Text>
            <Text style={styles.kpiChange}>+10%</Text>
          </View>
          <View style={styles.kpiBox}>
            <Text style={styles.kpiValue}>10,000</Text>
            <Text style={styles.kpiLabel}>Active Users</Text>
            <Text style={styles.kpiChange}>+5%</Text>
          </View>
          <View style={styles.kpiBox}>
            <Text style={styles.kpiValue}>15,000</Text>
            <Text style={styles.kpiLabel}>Complaints</Text>
            <Text style={styles.kpiChange}>-3%</Text>
          </View>
        </View>
      </View>

      {/* Customer Feedback */}
      <View style={styles.feedbackContainer}>
        <Text style={styles.feedbackTitle}>Customer Feedback</Text>
        <TouchableOpacity style={styles.viewReviews}>
          <Text style={styles.viewReviewsText}>View All Reviews</Text>
        </TouchableOpacity>

        <View style={styles.feedbackRow}>
          <View style={styles.feedbackBox}>
            <Text style={styles.feedbackCustomer}>Customer A</Text>
            <Text style={styles.feedbackText}>Great product, exceeded expectations</Text>
            <Text style={styles.feedbackEmoji}>😊 😊</Text>
          </View>
          <View style={styles.feedbackBox}>
            <Text style={styles.feedbackCustomer}>Customer B</Text>
            <Text style={styles.feedbackText}>Average performance, needs improvement</Text>
            <Text style={styles.feedbackEmoji}>😐 😐</Text>
          </View>
        </View>
      </View>

      {/* Comparison Details */}
      <View style={styles.comparisonContainer}>
        <Text style={styles.comparisonTitle}>Comparison Details</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>

        <View style={styles.comparisonItem}>
          <Text style={styles.category}>Category X</Text>
          <Text style={styles.subCategory}>Results</Text>
        </View>
        <View style={styles.comparisonItem}>
          <Text style={styles.category}>Category Y</Text>
          <Text style={styles.subCategory}>Statistics</Text>
        </View>
        <View style={styles.comparisonItem}>
          <Text style={styles.category}>Category Z</Text>
          <Text style={styles.subCategory}>Performance</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { paddingVertical: 8 },
  headerText: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  tabs: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 16 },
  tab: { padding: 8 },
  tabText: { fontSize: 16, color: '#000' },
  kpiContainer: { marginBottom: 16 },
  kpiTitle: { fontSize: 16, fontWeight: 'bold' },
  viewDetails: { alignSelf: 'flex-end', marginVertical: 8 },
  viewDetailsText: { color: '#007bff' },
  kpiRow: { flexDirection: 'row', justifyContent: 'space-between' },
  kpiBox: { flex: 1, alignItems: 'center', padding: 8, borderWidth: 1, borderColor: '#ddd', marginHorizontal: 4, borderRadius: 8 },
  kpiValue: { fontSize: 18, fontWeight: 'bold' },
  kpiLabel: { fontSize: 14, color: '#555' },
  kpiChange: { fontSize: 12, color: '#28a745', marginTop: 4 },
  feedbackContainer: { marginBottom: 16 },
  feedbackTitle: { fontSize: 16, fontWeight: 'bold' },
  viewReviews: { alignSelf: 'flex-end', marginVertical: 8 },
  viewReviewsText: { color: '#007bff' },
  feedbackRow: { flexDirection: 'row', justifyContent: 'space-between' },
  feedbackBox: { flex: 1, padding: 8, borderWidth: 1, borderColor: '#ddd', marginHorizontal: 4, borderRadius: 8 },
  feedbackCustomer: { fontSize: 14, fontWeight: 'bold' },
  feedbackText: { fontSize: 12, color: '#555' },
  feedbackEmoji: { fontSize: 16, marginTop: 4 },
  comparisonContainer: { marginBottom: 16 },
  comparisonTitle: { fontSize: 16, fontWeight: 'bold' },
  filterButton: { alignSelf: 'flex-end', marginVertical: 8 },
  filterText: { color: '#007bff' },
  comparisonItem: { paddingVertical: 8, borderBottomWidth: 1, borderColor: '#ddd' },
  category: { fontSize: 14, fontWeight: 'bold' },
  subCategory: { fontSize: 12, color: '#555' },
});

export default ComparisonScreen;
