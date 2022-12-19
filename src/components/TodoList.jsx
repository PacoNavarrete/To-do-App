export const TodoList = ({ todos = [], onDelete, onToggleTodo }) => {
  return (
    <ul className="list-container">
      {todos.map((todos) => (
        <li key={todos.id} className="list-item">
          <button
            className="list-button_delete"
            onClick={() => {
              onDelete(todos.id);
            }}
          >
            X
          </button>
          <button
            className="list-button_done"
            onClick={() => {
              onToggleTodo(todos.id);
            }}
          >
            👍
          </button>
          <span
            className={`todo-item ${
              todos.done ? 'middle-text-line' : ''
            }`}
          >
            {todos.todo}
          </span>
        </li>
      ))}
    </ul>
  );
};
