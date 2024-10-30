import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionDetailScreen({ route }) {
  const { transaction } = route.params || {};

  if (!transaction) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Transaction data is not available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.detailName}>{transaction.name}</Text>
      <Text style={styles.detailAmount}>Amount: ${transaction.amount}</Text>
      <Text style={styles.detailDate}>Date: {transaction.date}</Text>
      <Text style={styles.detailDetails}>Remarks: {transaction.details}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    margin: 6,
  },
  detailName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailAmount: {
    fontSize: 18,
    color: '008000',
    marginBottom: 4,
  },
  detailDate: {
    fontSize: 16,
    color: '#888',
    marginBottom: 4,
  },
  detailDetails: {
    fontSize: 16,
    color: '#555',
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});
