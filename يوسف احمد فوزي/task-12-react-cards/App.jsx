import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import Footer from "./components/Footer.jsx";

// Main Application Component
// This is a React app demonstrating component composition and props
// Features: Header navigation, product grid with cards, responsive footer

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
