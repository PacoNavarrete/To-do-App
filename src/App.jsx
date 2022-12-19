import { FormItem } from './components/FormItem';
import { TodoList } from './components/TodoList';
import { useTodoReducer } from './hooks/useTodoReducer';

export const App = () => {
  const { todoItems, handleNewtodo, handleToggleTodo, handleDeleteTodo } =
    useTodoReducer();

  return (
    <>
      <h1>To-Do's app</h1>
      <p>To-do's are saved in local storage !</p>
      <div className="statistics-container">
        <span>
          <small>{todoItems.length}</small>
          <br /> Total
        </span>
        <span>
          <small>
            {todoItems.filter((item) => item.done === false).length}
          </small>
          <br />
          Pending
        </span>
      </div>
      <div>
        <div>
          <FormItem onNewTodo={handleNewtodo} />
        </div>
        <div className="todos-container">
          <TodoList
            todos={todoItems}
            onDelete={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
      </div>
      <p>
        Developed by <br /> @Paco Navarrete | 2023
      </p>
    </>
  );
};
