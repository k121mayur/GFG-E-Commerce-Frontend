import ProductCard from "../../components/ProductCard/ProductCard"
import { useEffect, useState } from "react";
import {fetchProducts} from '../../services/productServices'
import { Nav, Spinner } from "react-bootstrap";
import NavB from "../../components/Navbar/NavB";
import Footer from "../../components/Footer/Footer";

const ProductsPage = ({addToCart} ) => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  function addItem(id) {
    const item = products.find((product) => product.id === id);
    addToCart(item);
  }
  
  useEffect(() => {
    setLoading(true)
    fetchProducts().then((data) => setProducts(data)).then(() => setLoading(false))
  }, []);

  return (
    <div>
      <NavB />
      <h1 className="text-center mt-2">All Products</h1>
      <div className="d-flex flex-wrap justify-content-center align-items-center"> 
        {loading && <Spinner animation="grow" variant="warning" style={{ height: '20vh', width: '20vh' }} className="m-5" /> }
        {products.map((item) => (<ProductCard key={item.id} {...item} buttonStatus={true} addItem={addItem} />))}
      </div>
      <Footer />
    </div>
  )
}

export default ProductsPage