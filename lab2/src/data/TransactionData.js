import React, { createContext, useState } from 'react';

export const TransactionContext = createContext();

export default function TransactionData({ children }) {
  const [transactions, setTransactions] = useState([
    { id: '1', name: 'Football Jersey', amount: 120, date: '2024-09-21', details: 'Birthday gift for Sanam Chhetri' },
    { id: '2', name: 'Phone Bill', amount: 35, date: '2024-09-30', details: 'Fido monthly bill' },
    { id: '3', name: 'Food', amount: 17, date: '2024-10-03', details: 'MoMo with friends' },
    { id: '4', name: 'Guitar', amount: 200, date: '2024-08-13', details: 'Bought a Guitar from Marketplace' },
    { id: '5', name: 'Gym Membership', amount: 50, date: '2024-10-01', details: 'Planet Fitness Monthly gym subscription renewal' },
    { id: '6', name: 'Groceries', amount: 70, date: '2024-10-07', details: 'Weekly groceries shopping' },
  ]);
  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
