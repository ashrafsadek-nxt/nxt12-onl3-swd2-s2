export default function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((item, index) => (
        <li key={index} style={{ marginBottom: 8 }}>
          {item}{" "}
          <button
            onClick={() => deleteTodo(index)}
            style={{ marginLeft: 10, padding: "2px 8px", cursor: "pointer" }}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
