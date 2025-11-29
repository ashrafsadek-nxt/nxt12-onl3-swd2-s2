import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

export default function ProductList(){
 const { products, loading } = useSelector(state => state.products);

 if(loading) return <p>Loading...</p>;

 return (
   <div style={{padding:20,display:'grid',gridTemplateColumns:'repeat(auto-fill,200px)',gap:20}}>
     {products.map(p => <ProductCard key={p.id} product={p}/>)}
   </div>
 );
}