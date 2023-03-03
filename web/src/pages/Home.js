import { collection, getDocs } from 'firebase/firestore';
import { db } from "../config/firebaseConnection";
import { useEffect, useState } from 'react';

function Home() {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "Products")

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef)
      setProducts(data.docs.map((eachDoc) => ({ ...eachDoc.data(), id: eachDoc.id })));
    };
    getProducts();
  },[]);


  return (
    <div className='products'>
      {
        products.map((eachProduct) => {
          return (
            <div className='eachProduct' key={eachProduct.id}>
              <img src={eachProduct.urlImage} alt={eachProduct.description}/>
              <h2>{eachProduct.brand}</h2>
              <h3>{eachProduct.description}</h3>
              <h4>R$ {eachProduct.price},00</h4>
            </div>
          );
        })}
    </div>
  );
}

export default Home