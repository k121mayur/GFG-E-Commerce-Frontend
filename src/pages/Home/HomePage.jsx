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
      <div className="d-flex flex-column justify-content-center align-items-center">
        {/* <h1 className="text-center mt-2">Welcome to X Mart</h1> */}
        <h4 className="text-center mt-2 text-warning">Browse our Top products</h4>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {loading && <Spinner animation="grow" variant="warning" style={{ height: '20vh', width: '20vh' }} className="m-5" /> }
          {products.filter((product) => product.rating.rate > 4.5).map((product) => (
            <ProductCard key={product.id} {...product} addItem={addItem} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};


export default HomePage;
