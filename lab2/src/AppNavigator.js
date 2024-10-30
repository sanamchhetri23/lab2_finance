import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import TransactionDetailScreen from './screens/TransactionDetailScreen';
import SummaryScreen from './screens/SummaryScreen';
import TransactionsListScreen from './screens/TransactionsListScreen';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TransactionsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#469632' }, headerTintColor: '#fff' }}>
            <Stack.Screen
                name="TransactionsList"
                component={TransactionsListScreen}
                options={{ title: 'Transactions', headerShown: true }} 
            />
            <Stack.Screen
                name="TransactionDetail"
                component={TransactionDetailScreen}
                options={{ title: 'Transaction Detail' }} 
            />
        </Stack.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Transactions') {
                        iconName = 'wallet-outline';
                    } else if (route.name === 'Summary') {
                        iconName = 'bar-chart-outline';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: '#A8D5A2',
                tabBarStyle: { backgroundColor: '#469632', borderTopColor: '#388E3C' },
            })}
        >
            <BottomTab.Screen
                name="Transactions"
                component={TransactionsStack}
                options={{ headerShown: false }} 
            />
            <BottomTab.Screen
                name="Summary"
                component={SummaryScreen}
                options={{
                    title: 'Summary',
                    headerStyle: { backgroundColor: '#469632' }, 
                    headerTintColor: '#fff', 
                }}
            />

        </BottomTab.Navigator>
    );
}
