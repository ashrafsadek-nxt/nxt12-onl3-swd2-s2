import React, { useState } from "react";
import Navbar from "./Navbar";
import "./style.css";

const App = () => {
  const [show, setShow] = useState(false);

  const toggleProducts = () => setShow(!show);

  const products = [
    { id: 1, img: "OIP (1).webp" },
    { id: 2, img: "OIP (2).webp" },
    { id: 3, img: "OIP (3).webp" },
    { id: 4, img: "R.png" },
  ];

  return (
    <div>
      <Navbar />

      <div className="show-section">
        <button className="toggle-btn" onClick={toggleProducts}>
          {show ? "Hide Products" : "Show Products"}
        </button>
      </div>

      <div id="container">
        {products.map((p) => (
          <div
            key={p.id}
            className="product-card"
            style={{ display: show ? "block" : "none" }}
          >
            <div className="img-wrap">
              <img src={`assets/images/${p.img}`} alt={`product-${p.id}`} />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo
              laborum fuga aliquid, accusamus quaerat nostrum molestias provident
              magnam iure necessitatibus voluptate similique quam a accusantium,
              autem illum ratione possimus.
            </p>
            <div className="btn-wrap">
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
