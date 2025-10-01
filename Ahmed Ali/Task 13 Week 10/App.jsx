import './App.css'
import Navbar from './Navbar.jsx'
import Counter from './Hooks/State/Counter.jsx'
import Chat from './Hooks/State/Chat.jsx'
import Cards from './Cards'
import Parent from './nestedComponents/Parent.jsx'
import Child from './nestedComponents/Child.jsx'
import Effect from './useEffect.jsx/FirstuseEffect.jsx'
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
      <Counter/>
      <Chat/>
      <Parent/>
      <Child/>
      <h2>=====================</h2>
      <Effect/>
    </>
  )
}

export default App // 'important' يعني عاوز اصدرها
