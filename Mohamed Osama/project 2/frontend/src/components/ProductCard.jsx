    import React from 'react'
    import { Link } from 'react-router-dom'

export default function ProductCard({product}){
  return (
    <article className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p>${product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`} className="btn">View</Link>
    </article>
  )
}
