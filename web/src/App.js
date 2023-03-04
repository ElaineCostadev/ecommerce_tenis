import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsProvider from "./context/ProductsProvider";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/shopping" element={ <ShoppingCart /> } />
          </Routes>
      </ProductsProvider>
    </div>
  );
}

export default App;
