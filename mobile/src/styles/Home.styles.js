import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  message: {
    fontSize: 16,
    backgroundColor: '#fb9bae',
    borderRadius: 5,
    padding: 5,
  },
  productCard: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    width: 338,
    height: 358,
    marginTop: 20,
    marginBottom: 10,
  },
  productImage: {
    flex: 1,
    width: '100%',
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
    flexDirection: 'row',
    backgroundColor: '#F8375D',
    marginBottom: 10,
    width: 307,
    borderRadius: 5,
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
    fontSize: 17,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: '#fff',
    paddingHorizontal: 30,
    paddingTop: 10,
  },
})

export default  styles