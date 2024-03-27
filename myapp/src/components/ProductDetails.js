import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function ProductDetailPage(props) {
  const [isProductSelected, setIsProductSelected] = useState(false);
  const [isWishlistSelected, setIsWishlistSelected] = useState(false);
 

  const navigate = useNavigate();
  if (!props.product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    setIsProductSelected(true);
    fetch("http://localhost:3002/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.product),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update React state with the newly created product
        console.log(data);
      })

      .catch((error) => console.error("Error adding product:", error));
    var cartLength = Number(localStorage.getItem("cartLength"));
    localStorage.setItem("cartLength", cartLength + 1);
  };
  const handleWishlist = () => {
    setIsWishlistSelected(true);
    fetch("http://localhost:3003/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.product),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update React state with the newly created product
        console.log(data);
      })
      .catch((error) => console.error("Error adding product:", error));
  };
  const handleProductClick = (id) => {
    navigate("/SingleProduct", { state: props });
  };
  console.log(props);
  return (
    <div>
      {console.log(props.product)}
      <div className="product">
        {console.log(props.product.imgdata)}

       
       
        <img
          onClick={() => handleProductClick(props.product.id)}
          src={props.product.imgdata}
          alt={props.product.name}
        />
        <h5>Product Name: {props.product.name}</h5>
        <p>Description: {props.product.description}</p>
        <p>Quantity: {props.product.quantity}</p>
        <p>Price: {props.product.price}</p>
        <p>Offer Price: {props.product.offerPrice}</p>
        <div className="btn-container">
          <button disabled={isProductSelected} onClick={handleAddToCart}>
            Add To Cart
          </button>
          <button disabled={isWishlistSelected} onClick={handleWishlist}>
            Wishlist
          </button>
          
        </div>
      </div>
      
    </div>
    
   
  );
}
export default ProductDetailPage;
