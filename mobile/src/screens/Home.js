import React, { useContext } from 'react'
import { View, Text, FlatList, TouchableOpacity, ImageSource, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ProductsContextApp } from '../context/ProductsContextApp';
import styles from '../styles/Home.styles'

const Home = () => {
  const { products, addToCard, message, showMessage } = useContext(ProductsContextApp);

  return (
    <View style={ styles.container }>
      {showMessage  && <Text style={styles.message}>{message}</Text>}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({item}) => {
          return (
            <View style={styles.productCard}>
              <Image
                style={ styles.productImage}
                source={{uri: item.urlImage}}
              />
              <Text style={styles.brandText}>{item.brand}</Text>
              <Text style={styles.descriptionText}>{item.description}</Text>
              <Text style={styles.priceText}>R$ {item.price},00</Text>
              <TouchableOpacity
                onPress={ () => addToCard(item)}
                style={styles.addButtom}>
                <Text style={styles.numberText}>1</Text>
                <Text style={styles.addButtomText}>ADICIONAR</Text>
              </TouchableOpacity>
            </View>
          )
        }}
        keyExtractor={item => item.id}>
      </FlatList>
    </View>
  )
}

export default Home