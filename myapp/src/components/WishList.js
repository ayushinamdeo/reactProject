import axios from "axios";

import { useEffect, useState } from "react";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);

  const handleRemove = (cartProduct) => {
    axios.delete(`http://localhost:3003/wishlist/${cartProduct.id}`);
    const newWishList = wishlist.filter(
      (product) => product.id !== cartProduct.id
    );
    setWishlist([...newWishList]);
  };
  const fetchCartData = () => {
    fetch("http://localhost:3003/wishlist")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWishlist(data);
      });
  };
  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <div>
      {wishlist.map((product) => (
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
export default WishList;
