import React, { useContext } from "react";
// import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AddtoCart = () => {
  const location = useLocation();

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/cart")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCartProducts(data);
      });
  }, []);

  //remove from  cart

  const handleRemove = (cartProduct) => {
    axios.delete(`http://localhost:3002/cart/${cartProduct.id}`);
    const newcartProducts = cartProducts.filter(
      (product) => product.id !== cartProduct.id
    );
    setCartProducts([...newcartProducts]);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {console.log(cartProducts)}
      {cartProducts.map((product) => (
        <div className="product">
          {console.log(product.imgdata)}
          <img src={product.imgdata} alt={product.name} />
          <h5>Product Name: {product.name}</h5>
          <p>Description: {product.Description}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Price: {product.price}</p>
          <p>Offer Price: {product.offerPrice}</p> 

          <div className="btn-container">
            <button onClick={() => handleRemove(product)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddtoCart;
