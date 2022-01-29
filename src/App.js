import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Templates/Header";
import Footer from "./Templates/Footer";
import Main from "./Screens/Home/Main";
import ProductList from "./Screens/Home/ProductList";
import Cart from "./Screens/Home/Cart";
import Checkout from "./Screens/Home/Checkout";

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/products/:id" element={<ProductList/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
