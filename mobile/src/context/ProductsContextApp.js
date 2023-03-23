import { getDocs, collection } from "firebase/firestore";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { db } from "../config/firebaseConnectionApp";

export const ProductsContextApp = createContext();

export const ProductsProviderApp = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);
  const [message, setMessage] = useState(false)

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
      setCard(card.map((cardItem) => ({
          ...cardItem,
          quantity: Number(cardItem.quantity) + 1
        })))

      // setCard({quantity: quantity += 1})
      // setMessage(true)
      // return setTimeout(() => setMessage(false), 1000)
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

