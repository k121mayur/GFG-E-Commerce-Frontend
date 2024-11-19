import NavBar from "../../components/Navbar/NavB";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { fetchProducts } from '../../services/productServices'
import ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from 'react-bootstrap/Spinner';

const HomePage = ({addToCart}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  function addItem(id) {
    const item = products.find((product) => product.id === id);
    addToCart(item);
  }
  // let items = []
  
  
  useEffect(() => {
    setLoading(true)
    fetchProducts().then((data) => setProducts(data)).then(() => setLoading(false))
  }, []);

  return (
    <>
      <NavBar />
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {loading && <Spinner animation="grow" variant="warning" style={{ height: '20vh', width: '20vh' }} className="m-5" /> }
        {products.map((product) => (
          <ProductCard key={product.id} {...product} addItem={addItem} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
