    import React, { useState, useEffect } from 'react'
    import { Routes, Route, Link } from 'react-router-dom'
    import ProductList from './components/ProductList'
    import ProductDetails from './components/ProductDetails'
    import Cart from './components/Cart'
    import productsData from './data/products'

    export default function App(){
  const [products, setProducts] = useState(productsData);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    // Try to fetch from backend; fallback to local data
    setLoading(true);
    fetch('/api/products').then(r=>{
      if(!r.ok) throw new Error('no api');
      return r.json()
    }).then(data=> setProducts(data)).catch(()=>{}).finally(()=>setLoading(false))
  },[])

  return (
    <div className="app">
      <header className="header">
        <h1><Link to="/">My E-commerce</Link></h1>
        <nav>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<ProductList products={products} loading={loading} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <footer className="footer">&copy; 2025 My Store</footer>
    </div>
  )
}
