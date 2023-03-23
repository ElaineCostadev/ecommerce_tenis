import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  productCard: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    width: 338,
    height: 358,
    marginTop: 10,
    marginBottom: 10,
    
  },
  productImage: {
    flex: 1,
    width: '100%',
    // height: '75%',
    alignItems: 'flex-end',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  brandText: {
    color: '#333333',
    textTransform: 'uppercase',
  },
  descriptionText: {
    alignSelf: 'flex-start',
    color: '#333333',
    marginLeft: 30,
  },
  priceText: {
    alignSelf: 'flex-start',
    fontWeight: '800',
    fontSize: 21,
    marginLeft: 30,
  },
  addButtom: {
    // flex:1,
    flexDirection: 'row',
    backgroundColor: '#F8375D',
    marginBottom: 10,
    width: 307,
    // height: 40,
    // padding: 5,
    borderRadius: 5,
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  addButtomText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    marginLeft: 50,
    fontWeight: 'bold',

  },
  numberText:{
    backgroundColor: '#ad2641',
    width: 70,
    height: 40,
    // alignItems: 'center',
    // alignSelf: 'center',
    fontSize: 17,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: '#fff',
    paddingHorizontal: 30,
    paddingTop: 10,
 
    // marginHorizontal: 10,
    
  },

  

})

export default  styles