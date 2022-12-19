import { useReducer, useEffect } from 'react';
import { initialState, todoReducer } from '../helpers/todoReducer';

export const useTodoReducer = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem('todo')) || [];
  };

  const [todoItems, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoItems));
  }, [todoItems]);

  const handleNewtodo = (todo) => {
    const action = {
      type: '[TODO] add todo',
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: '[TODO] delete todo',
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: '[TODO] toggle todo',
      payload: id,
    };
    dispatch(action);
  };

  return {
    todoItems,
    handleNewtodo,
    handleToggleTodo,
    handleDeleteTodo,
  };
};
