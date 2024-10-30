import React, { useContext } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TransactionContext } from '../data/TransactionData'; 

export default function TransactionsListScreen({ navigation }) {
  const { transactions } = useContext(TransactionContext);

  const renderTransaction = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
      <View style={styles.transactionItem}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionAmount}>${item.amount}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={renderTransaction}
    />
  );
}

const styles = StyleSheet.create({
  transactionItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  transactionName: {
    fontSize: 20,
  },
  transactionAmount: {
    color: '#008000',
  },
  transactionDate: {
    color: '#888',
  },
});