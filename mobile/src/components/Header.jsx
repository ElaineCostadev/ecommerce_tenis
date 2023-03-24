import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import styles from '../styles/Header.styles';
import { useNavigation } from '@react-navigation/native';
import { ProductsContextApp } from '../context/ProductsContextApp';

const Header = () => {
  const { card } = useContext(ProductsContextApp);
  const navigation = useNavigation();
  
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>COGNYSHOES</Text>
      <Image
        style={styles.headerImageShoes}
        source={require('../assets/cognyShoes.png')}
        />
      <TouchableOpacity
        onPress={() => navigation.navigate('ShoppingCard')}
        >
        <Text style={styles.headerShopping}>{card?.reduce((acc, curr) => acc + Number(curr?.quantity), 0)}</Text>
        <Image
          style={styles.headerImageShopping}
          source={require('../assets/shoppingIcon.png')}
          />
      </TouchableOpacity>
 
    </View>
  )
}

export default Header