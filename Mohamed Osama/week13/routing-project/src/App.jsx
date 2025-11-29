
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import NotFound from './NotFound';

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}
