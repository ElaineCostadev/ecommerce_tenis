import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ProductsProviderApp } from './src/context/ProductsContextApp';
import Home from './src/screens/Home';
import ShoppingCard from './src/screens/ShoppingCard';
import Header from './src/components/Header';
import { StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer sytle={styles.container}> 
        <Stack.Navigator initialRouteName='Home'
          screenOptions={ { backgroundColor: '#ffffff' }}
        >
            <Stack.Screen
              name='Home'
              component={Home}
              options={{
                headerTitle: () => <Header />,
                // headerTitle: () => <Header />,
                // headerTransparent: true,
                // headerBackVisible: false,
                // headerLeft: 

                // headerTransparent: true,
                // headerStyle: { backgroundColor: '#141419' },
                // headerTintColor: '#fff',
                // headerTitleStyle: { fontWeight: 'bold' },
              }}
              
            />

            <Stack.Screen 
              name='ShoppingCard'
              component={ShoppingCard}
              options={{
                // hideNavigationBar: false,
                headerTitle: () => <Header />,
                // headerTitle: { backgroundColor: '#313131' },

              }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 0,
  }

})

export default () => {
  return (
    <ProductsProviderApp>
      <App />
    </ProductsProviderApp>
  )
}
