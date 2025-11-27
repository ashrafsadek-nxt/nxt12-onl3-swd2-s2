import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    addTodo(task);
    setTask("");
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="text"
        value={task}
        placeholder="Enter a task..."
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: 6, width: "70%", marginRight: 10 }}
      />
      <button onClick={handleAdd} style={{ padding: "6px 12px" }}>
        Add
      </button>
    </div>
  );
}
