    import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({products, loading}){
  if(loading) return <p>Loading...</p>
  if(!products || products.length===0) return <p>No products found.</p>
  return (
    <section className="product-list">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </section>
  )
}
