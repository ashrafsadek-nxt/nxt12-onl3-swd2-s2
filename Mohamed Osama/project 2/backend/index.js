const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());

const DB = path.join(__dirname, 'data', 'products.json');
function readDB(){ return JSON.parse(fs.readFileSync(DB, 'utf8')); }
function writeDB(d){ fs.writeFileSync(DB, JSON.stringify(d, null, 2)); }

// GET all products
app.get('/api/products', (req, res) => {
  const products = readDB();
  res.json(products);
});

// GET product by id
app.get('/api/products/:id', (req, res) => {
  const products = readDB();
  const p = products.find(x => x.id === req.params.id);
  if(!p) return res.status(404).json({ message: 'Not found' });
  res.json(p);
});

// simple POST to add product (dev use)
app.post('/api/products', (req, res) => {
  const products = readDB();
  const newP = { id: 'p' + Date.now(), ...req.body };
  products.push(newP);
  writeDB(products);
  res.status(201).json(newP);
});

// PUT update
app.put('/api/products/:id', (req, res) => {
  const products = readDB();
  const idx = products.findIndex(p => p.id === req.params.id);
  if(idx === -1) return res.status(404).json({ message: 'Not found' });
  products[idx] = { ...products[idx], ...req.body };
  writeDB(products);
  res.json(products[idx]);
});

// DELETE
app.delete('/api/products/:id', (req, res) => {
  let products = readDB();
  products = products.filter(p => p.id !== req.params.id);
  writeDB(products);
  res.json({ message: 'Deleted' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Backend running on', PORT));
