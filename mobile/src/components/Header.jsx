import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/Header.styles';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>COGNYSHOES</Text>
      <Image
        style={styles.headerImageShoes}
        source={require('../assets/cognyShoes.png')}
        // style={{ width: 200, height: 100}}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('ShoppingCard')}
        >
        <Image
          style={styles.headerImageShopping}
          source={require('../assets/shoppingIcon.png')}
          // style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>

    </View>
  )
}

export default Header