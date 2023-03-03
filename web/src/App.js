import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shopping" element={ <ShoppingCart /> } />
      </Routes>
    </div>
  );
}

export default App;
