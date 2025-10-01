import { useState, useEffect } from "react"

function Child ({ Value , secValue, thirdValue })
{
    const [count, setCount] = useState(Value)
    const [num, setNum] = useState(secValue)
    const [secnum, setSecnum] = useState(thirdValue)
        
        useEffect(() => {
           document.title = `Final Result = ${count+num+secnum}`
        },[count, num, secnum]);
   
     return (
            <div>
             <h1> Example By Using useEffect </h1>
             <h2> 1-Count = {count}</h2> <h2>2-Num = {num}</h2> <h2>3-Secnum = {secnum}</h2>
             <button onClick={() => setCount(c => c+1)}> Count  +1 </button>
             <button onClick={() => setCount(c => c-1)}> Count  -1 </button>
             <button onClick={() => setNum(c => c*2)}> Num *2 </button>
             <button onClick={() => setSecnum(c => c/2)}> Num /2 </button>
             <button onClick={() => setSecnum(c => c+2)}> secNum +2 </button>
             <button onClick={() => setSecnum(c => c-2)}> secNum -2 </button>
            </div>
     )
}
export default Child ;