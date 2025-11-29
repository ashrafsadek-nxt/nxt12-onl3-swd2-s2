
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action){
  switch(action.type){
    case 'inc': return { count: state.count + 1 };
    case 'dec': return { count: state.count - 1 };
    default: return state;
  }
}

export default function App(){
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:'inc'})}>+</button>
      <button onClick={()=>dispatch({type:'dec'})}>-</button>
    </div>
  )
}
