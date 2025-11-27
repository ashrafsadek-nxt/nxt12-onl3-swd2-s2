import { useReducer, useState } from "react";

// Initial state
const initialState = [];

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((_, index) => index !== action.payload);
    case "RESET":
      return [];
    default:
      return state;
  }
}

export default function TodoReducerApp() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (!task.trim()) return;
    dispatch({ type: "ADD_TODO", payload: task });
    setTask("");
  };

  const handleDelete = (index) => {
    dispatch({ type: "DELETE_TODO", payload: index });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div style={{ maxWidth: 400, marginTop: 20 }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: 6, width: "70%", marginRight: 10 }}
      />
      <button onClick={handleAdd} style={{ padding: "6px 12px" }}>
        Add
      </button>
      <button onClick={handleReset} style={{ padding: "6px 12px", marginLeft: 5 }}>
        Reset
      </button>

      <ul style={{ marginTop: 20 }}>
        {todos.map((item, index) => (
          <li key={index} style={{ marginBottom: 8 }}>
            {item}{" "}
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: 10, padding: "2px 8px", cursor: "pointer" }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
