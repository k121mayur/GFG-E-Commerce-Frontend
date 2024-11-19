/* eslint-disable react/prop-types */
import { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard"
import NavB from "../../components/Navbar/NavB";
import { Button } from "react-bootstrap";

const CartPage = ({setCart, cart}) => {
  const local_cart = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    setCart(local_cart);
  }, [])
  return (

    <div> 
      <NavB />
      <h1 className="text-center mt-2">Your Cart</h1>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-wrap justify-content-center align-items-center col-lg-8 col-md-6 col-sm-12">
          { cart.map((item) => (<ProductCard key={item.id} {...item} buttonStatus={false} />)) }
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 m-3 border rounded d-flex flex-column justify-content-start">
          <h2 className="text-center mx-0 py-2 bg-dark text-white">In Your Cart</h2>
          { cart.map((item) => (<p key={item.id}> {item.title} | ${item.price} </p>)) }
          <h2 className="text-center">Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</h2>
          <Button variant="success" onClick={() => {alert("Order Placed successfully"); setCart([])}}>Buy</Button>
        </div>
      </div>
    </div>

  )
}

export default CartPage