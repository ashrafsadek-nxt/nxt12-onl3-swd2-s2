import './assets/css/Header.css'
// import weblogo from './assets/images/.svg'
function Header(prop){

  return(
    <>
    <div id='Header'>
      <div id='Header_brand-div'>
      <img src='' alt="" id='Header_brand-div_weblogo'/>
      <span id='Header_brand-div_brand-name'>Brand</span>
      </div>
        <ul id='Header_nav-links'>
          <li className='Header_nav-links_nav-link'><a href="">page 1</a></li>
          <li className='Header_nav-links_nav-link'><a href="">page 2</a></li>
          <li className='Header_nav-links_nav-link'><a href="">page 3</a></li>
          <li className='Header_nav-links_nav-link'><a href="">page 4</a></li>
        </ul>
        <div id='Header_div-count'>
          <span id='Header_div-count_span'>{prop.countnum}</span>
        </div>
    </div>
    </>
  )
}
export default Header