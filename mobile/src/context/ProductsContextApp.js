import { getDocs, collection } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { Vibration } from "react-native";
import { db } from "../config/firebaseConnectionApp";

export const ProductsContextApp = createContext();

export const ProductsProviderApp = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);
  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const productsCollectionRef = collection(db, "Products")

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef)
        const list = []
        data.forEach((doc) => {
          list.push({...doc.data(), id: doc.id})
      })
      setProducts(list)
    }
    getProducts();
  }, [])

  const addToCard = (product) => {
    const productInCart = card?.find((cartItem) => cartItem.id === product.id);
    let quantity = 0
    if (!productInCart) {
      setCard((prevState) => [
        ...prevState,
        {
          id: product.id,
          brand: product.brand,
          description: product.description,
          quantity: quantity += 1,
          price: product.price,
          urlImage: product.urlImage,
          subTotal: (Number(product.price) * Number(quantity)),
        },
      ]);
    }
    if (productInCart) {
      setCard(card.filter((cardItem) => (
        {
          ...cardItem,
          quantity: Number(cardItem.quantity) + 1
        })))
      setShowMessage(true)
      Vibration.vibrate()
      setMessage('Produto está no carrinho')
      return setTimeout(() => {
        setMessage(null)
        setShowMessage(false)
      }, 1500)
    }
  }

  const removeButtom = (product) => {
      const removeItem = card.filter((eachCart) => eachCart.id !== product.id);
      setCard(removeItem)
  }

  const contextValue  = {
    products,
    card,
    setCard,
    message,
    setMessage,
    showMessage,
    setShowMessage,
    addToCard,
    removeButtom,
  }


  return (
    <ProductsContextApp.Provider value={contextValue}>
      { children }
    </ProductsContextApp.Provider>
  )
}

// export const useCartApp = () => {
//   return useContext(productsContextApp)
// }

