import './assets/css/Card.css'
function Card(prop){
  return(
    <>
    <div id='card'>
      <div id='card_div-media'>
        <img src={prop.src} alt=""/>
      </div>
      <div id='card_div-body'>
        <h2 id='card_div-body_name'>{prop.name}</h2>
        <p id='card_div-body_discrip'>{prop.discrip}</p>
        <div id='card_div-body_div-meta'>
          <p id='card_div-body_div-meta_rate'>{prop.rate}</p>
          <pv id='card_div-body_div-meta_price'><del>{prop.discount}</del> &nbsp;{prop.price}</pv>
        </div>
      </div>
      <div id='card_div-btn'>
        <button id='card_div-btn_btn' onClick={prop.onadd}>Add to cart</button>
        <button id='card_div-btn_btn' onClick={prop.ondelet}>Delete From cart</button>
      </div>
    </div>
    </>
  )
}
export default Card