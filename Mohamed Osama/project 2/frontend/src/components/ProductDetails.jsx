    import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function ProductDetails(){
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(()=>{
    setLoading(true);
    fetch('/api/products/' + id).then(r=>{
      if(!r.ok) throw new Error('not found');
      return r.json();
    }).then(data=> setProduct(data)).catch(()=> setProduct(null)).finally(()=> setLoading(false))
  },[id])

  if(loading) return <p>Loading...</p>
  if(!product) return <p>Product not found.</p>

  return (
    <div className="product-details">
      <button onClick={()=>nav(-1)}>Back</button>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button className="btn">Add to cart</button>
    </div>
  )
}
