import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home/HomePage'
import ProductsPage from './pages/Products/ProductsPage'
import ProductPage from './pages/Product/ProductPage'
import CartPage from './pages/Cart/CartPage'

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  function addToCart(item) {
    setCart([...cart, item]);
    alert("Item added to cart");
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>

        <Router>
          <Routes>
            <Route path="/" element={<HomePage addToCart={addToCart} />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
            <Route path="/products/:id" element={<ProductPage addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage setCart={setCart} cart={cart} />} />
          </Routes>
        </Router>
 
    </>
  )
}

export default App
