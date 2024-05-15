import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ProductList = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    let result = await fetch("http://localhost:5000/products", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    setProduct(result);
    console.log(result); // Logging 'result' instead of 'product'
  };
  useEffect(() => {
    console.log("Product state updated:", product);
  }, [product]);
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "delete",
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    alert("product is deleted");
    result = await result.json();
    if (result) {
      getProduct();
    }
  };
  return (
    <div className="product-section">
      <h1>Product list</h1>
      <ul className="product-list">
        <li>Serial No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Delete Product</li>
        <li>update Product</li>
      </ul>
      {product.map((items, index) => (
        <ul className="product-list">
          <li>{index}</li>
          <li>{items.name}</li>
          <li>${items.price}</li>
          <li>{items.category}</li>
          <li>{items.company}</li>
          <li>
            <button onClick={() => deleteProduct(items._id)}>Delete</button>
          </li>
          <li>
            <Link to={"/update/" + items._id}>update</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default ProductList;
