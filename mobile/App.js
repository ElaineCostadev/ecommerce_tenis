import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ProductsProviderApp } from './src/context/ProductsContextApp';
import Home from './src/screens/Home';
import ShoppingCard from './src/screens/ShoppingCard';
import Header from './src/components/Header';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer sytle={styles.container}> 
        <Stack.Navigator initialRouteName='Home'
        >
            <Stack.Screen
              name='Home'
              component={Home}
              options={{
                headerTitle: () => <Header />,
              }}
            />

            <Stack.Screen 
              name='ShoppingCard'
              component={ShoppingCard}
              options={{
                headerTitle: () => <Header />,
              }}
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default () => {
  return (
    <ProductsProviderApp>
      <App />
    </ProductsProviderApp>
  )
}
