import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    // width: '100%',
    height: 80,
    marginLeft: -15,

    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
    
  },
  headerTitle: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',

  },
  headerImageShoes:{
    width: 40,
    // marginRight: '36%',
    marginLeft: 10,
  },
  headerImageShopping: {
    width: 20,
    marginHorizontal: 100,
    // marginHorizontal: 90,
    // alignSelf: 'flex-end',
  },

})

export default styles;