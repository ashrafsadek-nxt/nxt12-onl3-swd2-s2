import { useReducer } from "react";
const initialState = { count: 0 };
function reducer(state, action) {
  const actions = {
    inc: () => ({ count: state.count + 1 }),
    dec: () => ({ count: state.count - 1 }),
  };
  return actions[action.type]?.() || state;
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
    </div>
  );
}
