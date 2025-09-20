import './assets/css/Header.css'
function Header(){

  return(
    <>
    <div id='Header'>
      <img src="" alt="" id='weblogo'/>
      <nav>
        <ul id='nav_links'>
          <li className='nav_link'><a href="">page 1</a></li>
          <li className='nav_link'><a href="">page 2</a></li>
          <li className='nav_link'><a href="">page 3</a></li>
          <li className='nav_link'><a href="">page 4</a></li>
        </ul>
      </nav>
      <button id='nav_Sign-in'>Sign in</button>
    </div>
    </>
  )
}
export default Header