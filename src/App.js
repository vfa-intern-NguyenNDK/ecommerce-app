import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import {Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/products" element={<Products />} />
          <Route path='/products/:id' element={<Product/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
