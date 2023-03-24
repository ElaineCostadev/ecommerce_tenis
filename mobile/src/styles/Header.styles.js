import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
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
    marginLeft: 10,
  },
  headerShopping: {
    position: 'absolute',
    color: '#fff',
    backgroundColor: '#F8375D',
    width: 20,
    padding: 2,
    borderRadius: 10,
    marginHorizontal: 100,
    marginVertical: -10,
  },
  headerImageShopping: {
    width: 20,
    marginHorizontal: 80,
  },

})

export default styles;