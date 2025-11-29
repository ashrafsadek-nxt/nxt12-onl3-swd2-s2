import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./slices/productsSlice";

export default function App(){
 const dispatch = useDispatch();

 useEffect(()=>{ dispatch(fetchProducts()); },[]);

 return (
   <div>
     <header className='header'>
        <h1><Link to='/'>E-commerce Redux</Link></h1>
        <nav><Link to='/cart'>Cart</Link></nav>
     </header>

     <Routes>
       <Route path='/' element={<ProductList/>}/>
       <Route path='/product/:id' element={<ProductDetails/>}/>
       <Route path='/cart' element={<Cart/>}/>
     </Routes>
   </div>
 );
}