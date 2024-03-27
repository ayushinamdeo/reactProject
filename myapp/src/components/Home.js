import React, { useState, useEffect } from "react";
import ProductDetailPage from "./ProductDetails";
import NavBar from "./NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {
  

  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => setProducts(data));
      
     

      fetch('http://localhost:3002/cart')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("cartLength", data.length)});
  }, []);
  
  return (
    
    <div>
           <NavBar />
           <i class="fa-solid fa-cart-circle-plus"></i>

      {console.log(products)}
      <h1 style={{ textAlign: "center" }}> Welcome to FoxtaleBloom</h1>
      <div className="product-list">
        {products.map((product) => (
          <>
            {console.log(product)}
            <ProductDetailPage key={product.id} product={product} />
          </>
        ))}
      </div>
     
      
    </div>
  );
}
export default HomePage;
