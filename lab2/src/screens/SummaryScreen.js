import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {TransactionContext } from '../data/TransactionData';

export default function SummaryScreen() {
  const { transactions } = useContext(TransactionContext);

  const totalAmount = transactions.reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <Text style={styles.total}>Total Amount: ${totalAmount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    borderRadius: 4,  
  },
  total: {
    fontSize: 18,
    color: '#008000',
  },
});
