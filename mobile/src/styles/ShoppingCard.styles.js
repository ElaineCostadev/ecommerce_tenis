import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  shoppingContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  messageQuantity: {
    fontSize: 16,
    backgroundColor: '#fb9bae',
    borderRadius: 5,
    padding: 5,
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 338,

  },
  cardImage: {
    width: '100%',
    backgroundColor: 'red',
  },
  brandText: {
    marginTop: 20,
  },
  descriptionText: {
    marginTop: 10,
  },
  priceText: {
    alignSelf: 'auto',
    fontWeight: 'bold',
    fontSize: 16,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
    padding: 5,
  },
  quantityButtom: {
    width: 30,
    marginHorizontal: 10,
    height: 33,
    backgroundColor: '#3c8e3c',
    borderRadius: 50,
  },
  quantityButtomText:{
    alignSelf: 'center',
    fontWeight: '900',
    fontSize: 23,
  },
  quantity: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  subTotal: {
    marginLeft: 80,
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  removeButtom: {
    position: 'absolute',
    backgroundColor: '#cf2e2e',
    marginTop: 10,
    marginHorizontal: 145,
    borderRadius: 10,
  },
  removeTextButtom: {
    color: 'white',
    padding: 8,
  },

  totalContainer: {
    width: 340,
    backgroundColor: '#fff',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  total: {
    alignSelf: 'center',
    fontWeight: '800',
    textTransform: 'uppercase',
    fontSize: 16,
    color: '#999999',
  },
  totalText: {
    alignSelf: 'center',
    fontWeight: '800',
    fontSize: 30,

  },
  finishOrderButtom: {
    backgroundColor: '#F8375D',
    marginBottom: 10,
    width: 315,
    height: 42,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  finishOrderText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

})

export default styles;