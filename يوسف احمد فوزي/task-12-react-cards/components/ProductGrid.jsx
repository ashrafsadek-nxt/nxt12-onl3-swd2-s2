import React from "react";
import ProductCard from "./ProductCard.jsx";
import "./ProductGrid.css";

function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "MacBook Pro M3",
      price: "$1,999",
      originalPrice: "$2,299",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
      rating: 4.8,
      reviews: 128,
      category: "Laptops",
      isOnSale: true,
      features: ["M3 Chip", "16GB RAM", "512GB SSD", "14-inch Display"],
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: "$1,199",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
      rating: 4.9,
      reviews: 256,
      category: "Smartphones",
      isOnSale: false,
      features: [
        "A17 Pro Chip",
        "128GB Storage",
        "Pro Camera",
        "Titanium Design",
      ],
    },
    {
      id: 3,
      name: "Samsung Galaxy Watch",
      price: "$329",
      originalPrice: "$399",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      rating: 4.6,
      reviews: 89,
      category: "Wearables",
      isOnSale: true,
      features: ["Health Tracking", "GPS", "Water Resistant", "3-Day Battery"],
    },
    {
      id: 4,
      name: "Sony WH-1000XM5",
      price: "$349",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      rating: 4.7,
      reviews: 167,
      category: "Audio",
      isOnSale: false,
      features: [
        "Noise Cancelling",
        "30hr Battery",
        "Quick Charge",
        "Voice Assistant",
      ],
    },
    {
      id: 5,
      name: "iPad Air",
      price: "$649",
      originalPrice: "$749",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
      rating: 4.5,
      reviews: 94,
      category: "Tablets",
      isOnSale: true,
      features: [
        "M1 Chip",
        "10.9-inch Display",
        "Apple Pencil Support",
        "All-Day Battery",
      ],
    },
    {
      id: 6,
      name: "Dell XPS 13",
      price: "$1,299",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
      rating: 4.4,
      reviews: 73,
      category: "Laptops",
      isOnSale: false,
      features: ["Intel i7", "16GB RAM", "512GB SSD", "13.3-inch 4K Display"],
    },
  ];

  return (
    <section className="product-grid-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Discover our latest collection of premium tech products</p>
        </div>

        <div className="filter-tabs">
          <button className="filter-tab active">All Products</button>
          <button className="filter-tab">Laptops</button>
          <button className="filter-tab">Smartphones</button>
          <button className="filter-tab">Audio</button>
          <button className="filter-tab">Wearables</button>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="load-more-section">
          <button className="load-more-btn">
            Load More Products
            <i className="fas fa-arrow-down"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
