import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

export default function ProductDetails(){
 const { id } = useParams();
 const dispatch = useDispatch();
 const product = useSelector(s => s.products.products.find(p=>p.id === id));

 if(!product) return <p>Not found</p>;

 return (
   <div style={{padding:20}}>
     <h2>{product.title}</h2>
     <p>{product.description}</p>
     <p>${product.price}</p>
     <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
   </div>
 );
}