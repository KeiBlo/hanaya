import React from "react"
import { Link } from "react-router-dom"

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product__image-box">
        <Link to={`/product/${product._id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="product__img"
          />
        </Link>
        <p className="product__additional-info">{product.additionalInfo}</p>
      </div>

      <div className="product__info">
        <h2 className="product__title">{product.title}</h2>
        <p className="product__price">
          <span className="product__price-old">¥5500</span> ¥{product.price}
        </p>
      </div>
    </div>
  )
}

export default Product
