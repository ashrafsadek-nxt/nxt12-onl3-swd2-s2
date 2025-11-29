import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../slices/cartSlice';

export default function Cart(){
 const dispatch = useDispatch();
 const items = useSelector(s => s.cart.items);

 return (
   <div style={{padding:20}}>
     <h2>Cart</h2>
     {items.map(i => (
       <div key={i.id}>
         {i.title} - ${i.price}
         <button onClick={()=>dispatch(removeFromCart(i.id))}>X</button>
       </div>
     ))}
     <button onClick={()=>dispatch(clearCart())}>Clear Cart</button>
   </div>
 );
}