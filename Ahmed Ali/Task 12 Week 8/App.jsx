import './App.css'
import Navbar from './Navbar.jsx'
import Cards from './Cards'
import './Navbar.css'
import './Cards.css'
// function component + state management
// function component => html + state management فانكشن بداخلها نكتب الاكواد بتاعتها بما فيها 
// function component كل اجزاء المشروع يتم تقسيمها علي صفحات

function App() {
  
  return (
    <>
      <Navbar/>
      <Cards/>
    </>
  )
}

export default App // 'important' يعني عاوز اصدرها
