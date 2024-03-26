import React, { useContext } from "react";
import { useLocation } from "react-router-dom";


const SingleProduct = () => {

  const location = useLocation();
  console.log(location.state);

  const props = location.state;

  const handleSubmit = () => {};
  const handleWishlist = () => {};

  return (
    

    <div>
      {console.log(props.product)}
      <div className="product">
        {console.log(props.product.imgdata)}
        <img src={props.product.imgdata} alt={props.product.name} />
        <h5>Product Name: {props.product.name}</h5>
        <p>Description: {props.product.Description}</p>
        <p>Quantity: {props.product.quantity}</p>
        <p>Price: {props.product.price}</p>
        <p>Offer Price: {props.product.offerPrice}</p>
        <div className="btn-container">
          <button onClick={handleSubmit}>Add To Cart</button>
          <button onClick={handleWishlist}>Wishlist</button>
        </div>
      </div>
    </div>
   
  );
};
export default SingleProduct;
