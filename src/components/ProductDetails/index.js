import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
 

import "./index.css";

export default function ProductDetails() {
  const [product, setProduct] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  console.log(product);

  return (
    <div className="exact-product">
      <div className="exact-product-image-container">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="exact-image"
          />

          <p className="prize exact-prize extact-title">
            <span>Price: </span>${product.price}
          </p>
        </div>
        <div>
          <p className="paragraph">
            <span className="extact-title">Title: </span>
            {product.title}
          </p>
          <p className="paragraph">
            <span className="extact-title">Description: </span>
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}