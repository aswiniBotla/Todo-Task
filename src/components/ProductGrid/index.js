import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
function ProductGrid(props) {
  const { eachItem } = props;
  const { id, title, price, image } = eachItem;
  return (
    <li className="each-product">
      <div className="each-product-image-container">
        <Link to={`/products/${id}`}>
          <img src={image} alt={title} className="product-image" />
        </Link>
        <p className="paragraph">{title}</p>
        <p className="prize extact-title">${price}</p>
      </div>
    </li>
  );
}

export default ProductGrid;