//import { useState } from 'react'
import './assets/css/App.css'
import Card from'./Card.jsx'
import Header from './Header.jsx'

function App() {

  return (  
    <>
    <Header/>
{/*----------------------------------------------------*/}
<div id='grid'>
<Card
src = 'https://cdn.shopify.com/s/files/1/0551/6391/2361/files/resizecom_Samsung_Galaxy_S25_Ultra_-_5G_Dual_Sim_XPRS_Warranty.webp?v=1749994849'
name = 'Samsung Galaxy S25 Ultra'
discrip = {`
The S25 Ultra is Samsung’s premium flagship, featuring a large 6.9-inch Dynamic AMOLED 120Hz display, a top-end Snapdragon 8 Elite chip, and a powerful camera array including a 50 MP main sensor.
`}
price= {66200}
discount = {800}
rate = '★ ★ ★ ★ ☆'
/>
{/*----------------------------------------------------*/}
<Card
src = 'https://cdn.shopify.com/s/files/1/0551/6391/2361/files/Samsung_Galaxy_A56_5G_8GB_Ram_128GB.webp?v=1749994301'
name = 'Samsung Galaxy A56 5G'
discrip = {`
The A56 5G is an upper-mid-range phone offering 5G connectivity, a vivid 120Hz Super AMOLED screen, and a strong 50 MP camera with OIS. It balances performance and value well, with good battery life and solid design.  
`}
price= {18399}
rate = '★ ★ ★ ★ ☆'
/>
{/*----------------------------------------------------*/}
<Card
src = 'https://cdn.shopify.com/s/files/1/0551/6391/2361/files/Samsung_Galaxy_A26_Dual_Sim_5G_128GB.png?v=1752394320'
name = 'Samsung Galaxy A26 5G'
discrip = {`
A26 5G brings 5G support to a more affordable bracket, with a 120Hz AMOLED display and a 50 MP main camera. It’s a strong pick if you want modern features (like water/dust resistance or premium glass protection) without going for a flagship price.
`}
price= {11799}
discount = {8000}
rate = '★ ★ ★ ★ ☆'
/>
{/*----------------------------------------------------*/}
<Card
src = 'https://cdn.shopify.com/s/files/1/0551/6391/2361/files/Samsung_Galaxy_A16_-_4G_Dual_Sim_6GB_Ram_128GB_xprs_7.png?v=1752397300'
name = 'Samsung Galaxy A16 4G'
discrip = {`
The A16 4G is a budget-oriented model with a large 6.7-inch Super AMOLED display and enough RAM & storage for everyday use. It’s not premium in materials or camera sophistication, but it offers good value for basic tasks and media consumption.
`}
price= {10499}
rate = '★ ★ ★ ★ ☆'
/>
</div>
    </>
  )
}

export default App
