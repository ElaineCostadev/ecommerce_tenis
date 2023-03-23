import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  shoppingContainer: {
    flex: 1,
    // width: '100%',
    // height: 'auto',
    alignItems: 'center',
    // backgroundColor: 'gray',
    backgroundColor: '#000',
  },
  cardContainer: {
    // height: '100%',
    // flex: 1,
    // height: '100%',
    // width: '100%',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    // borderTopStartRadius: 10,
    backgroundColor: '#fff',
    width: 338,
    // marginTop: 10,
    // marginBottom: 10,
    // backgroundColor: '#000',
  },
  cardImage: {
    width: '100%',
    backgroundColor: 'red',
  },

  brandText: {
    marginTop: 20,
    // marginLeft: 10,
  },
  descriptionText: {
    marginTop: 10,
    // marginBottom: 10,
  },
  priceText: {
    // marginLeft: 80,
    // marginRight: 40,
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
    
    // justifyContent: 'center',
    // alignSelf: 'space-around',
    // alignContent: 'space-around',
    // justifyContent: 'space-between',

  },
  quantityButtom: {
    width: 30,
    // padding: 20,
    marginHorizontal: 10,
    height: 33,
    backgroundColor: '#3c8e3c',
    borderRadius: 50,
  },
  quantityButtomText:{
    // justifyContent: 'center',
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
    // paddingEnd: 10,
    // width: 2,
    marginHorizontal: 145,
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    borderRadius: 10,
  },
  removeTextButtom: {
    color: 'white',
    padding: 8,
  },

  totalContainer: {
    // flex: 1,
    width: 340,
    backgroundColor: '#fff',
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
    // flex:1,
    // flexDirection: 'row',
    backgroundColor: '#F8375D',
    marginBottom: 10,
    width: 315,
    height: 42,
    // padding: 5,
    borderRadius: 5,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  finishOrderText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    // marginLeft: 50,
    fontWeight: 'bold',
  },

})

export default styles;