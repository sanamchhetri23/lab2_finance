import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';
import TransactionData from './src/data/TransactionData';

export default function App() {
  return (
    <NavigationContainer>
      <TransactionData>
        <AppNavigator />
      </TransactionData>
    </NavigationContainer>
  );
}
