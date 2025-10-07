import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);
    // Add to cart logic here
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <div className="product-card">
      {product.isOnSale && (
        <div className="sale-badge">
          <span>Sale</span>
        </div>
      )}

      <button
        className={`like-btn ${isLiked ? "liked" : ""}`}
        onClick={toggleLike}
      >
        <i className={isLiked ? "fas fa-heart" : "far fa-heart"}></i>
      </button>

      <div className="product-image">
        {!imageLoaded && <div className="image-placeholder">Loading...</div>}
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? "block" : "none" }}
        />
        <div className="image-overlay">
          <button className="quick-view-btn">
            <i className="fas fa-eye"></i>
            Quick View
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>

        <h3 className="product-name">{product.name}</h3>

        <div className="product-rating">
          <div className="stars">{renderStars(product.rating)}</div>
          <span className="rating-text">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        <div className="product-features">
          {product.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="feature-tag">
              {feature}
            </span>
          ))}
        </div>

        <div className="product-price">
          <span className="current-price">{product.price}</span>
          {product.originalPrice && (
            <span className="original-price">{product.originalPrice}</span>
          )}
        </div>

        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <i className="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
          <button className="compare-btn">
            <i className="fas fa-balance-scale"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
