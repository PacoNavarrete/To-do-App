export const initialState = [
  // {
  //   id: 1,
  //   todo: 'Test task',
  //   done: false,
  // },
];

export const todoReducer = (initialState = [], action) => {
  const actionCase = {
    '[TODO] add todo': [...initialState, action.payload],
    '[TODO] delete todo': initialState.filter(
      (todo) => todo.id !== action.payload
    ),
    '[TODO] toggle todo': initialState.map((todo) => {
      if (todo.id === action.payload) {
        return {
          ...todo,
          done: !todo.done,
        };
      }

      return todo;
    }),
  };

  return actionCase[action.type] || initialState;
};
