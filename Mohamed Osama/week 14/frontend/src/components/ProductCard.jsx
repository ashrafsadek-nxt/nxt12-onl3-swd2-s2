import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({product}){
 return (
   <div style={{background:'#fff',padding:10,borderRadius:6}}>
     <h3>{product.title}</h3>
     <p>${product.price}</p>
     <Link to={'/product/' + product.id}>View</Link>
   </div>
 );
}