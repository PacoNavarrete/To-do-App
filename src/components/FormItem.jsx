import { useState } from 'react';

export const FormItem = ({ onNewTodo }) => {
  const [todoInput, setTodoInput] = useState('');

  const onInputChange = ({ target }) => {
    setTodoInput(target.value);
  };

  const onSubmitNewTodo = (event) => {
    event.preventDefault();
    const value = event.target.addNewTask.value;

    if (value.length > 1) {
      const newTodo = {
        id: new Date().getTime(),
        todo: value,
        done: false,
      };
      onNewTodo(newTodo);
    } else {
      alert('Try to describe the task!');
    }

    setTodoInput('');
  };

  return (
    <form
      onSubmit={(event) => {
        onSubmitNewTodo(event);
      }}
      className='form-container'
    >
      <input
        type="text"
        placeholder="ADD A NEW ONE"
        className="form-input-addtodo"
        name="addNewTask"
        value={todoInput}
        onChange={(event) => onInputChange(event)}
        autoFocus={true}
      />
      <button className="form-submit-newtodo" type="submit">
      ENTER ⤵
      </button>
    </form>
  );
};