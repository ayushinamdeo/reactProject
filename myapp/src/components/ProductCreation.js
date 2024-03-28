import React, { useState } from 'react';
import ProductData from "./ProductsData.json";
import {useEffect} from  'react';
import "../css/ProductCreation.css";


function AddProductForm({ addProduct,productsLength }) {

 const [name, setName] = useState(null);
 const [image, setImage] = useState(null);
 const [quantity, setQuantity] = useState(null);
 const [catergory, setCategory] = useState(null);
 const [price, setPrice] = useState(null);
 const [offerPrice, setOfferPrice] = useState(null);
 const [description, setDescription] = useState(null);

 const handleSubmit = (e) => {
   e.preventDefault();
  
   const newProduct = {
   
    id: productsLength+1,
    name: name,
    imgdata: image,
    quantity : quantity,
    catergory: catergory,
    price: price,
    offerPrice : offerPrice,
    description : description
   };
   var bool = false;
   Object.entries(newProduct).map(([key, value]) => {
    console.log(+newProduct[key])
    if(value==null){
        bool = true;
    }
   })
   if(bool == false){
   // Call addProduct function from parent component
   addProduct(newProduct);

   // Reset form fields
   setName('');
   setImage('');
    setQuantity('');
    setCategory('');
    setPrice('');
   setOfferPrice('');
    setDescription('');
   }
   
//    document.getElementById("add-product-form").reset();
 };
 return (
<form onSubmit={handleSubmit} id="add-product-form">
<input type="text" value={name} placeholder="Product Name" onChange={(e) => setName(e.target.value)} />
<input type="text" value={description} placeholder="Product Description" onChange={(e=> setDescription(e.target.value))}></input><br></br>
<input type="number" value={quantity} placeholder="Product Quantity" onChange={(e=> setQuantity(e.target.value))}></input>
<input type="text" value={catergory} placeholder="Product Category" onChange={(e=> setCategory(e.target.value))}></input><br></br>
<input type="number" value={price} placeholder="Product Price" onChange={(e) => setPrice(e.target.value)} />
<input type="number" value={offerPrice} placeholder="Product Offer Price" onChange={(e=> setOfferPrice(e.target.value))}></input><br></br>
<input type="text" value={image} placeholder="Product Image" onChange={(e=> setImage(e.target.value))}></input>
<button type="submit" className='btn add-product'>Add Product</button>
</form>
 );
}

function App() {
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
      fetch('http://localhost:3001/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);
    const addProduct = (newProduct) => {
        console.log("hello");
      fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      })
      .then(response => response.json())
      .then(data => {
        // Update React state with the newly created product
        console.log(data);
        setProducts([...products, data]);
      })
      .catch(error => console.error('Error adding product:', error));
    };
    console.log(products);
    return (
   <div>
   <h1>Add New Product</h1>
   <AddProductForm addProduct={addProduct} productsLength={products.length}/>
       
   </div>
    );
   }
   export default App;