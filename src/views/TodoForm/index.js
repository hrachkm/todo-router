import React from "react";
import { TodoContext } from "../../context/Todo";

import './TodoForm.css';

export function TodoForm() {

  const[ newTodoValue, setNewTodoValue] = React.useState('');
  const { addTodo, setOpenModal } = React.useContext(TodoContext)

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onAdd = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }
  return (
    <form onSubmit={onAdd}>
      <div className="form-input">
        <label>Write your task</label>
        <textarea
          placeholder="Example: Do my homework"
          value={newTodoValue}
          onChange={onChange}
          cols={10}
          rows={5}
        />
      </div>
      <div className="form-actions">
        <button class="btn-button btn-cancel" type="button" onClick={onCancel}>Cancel</button>
        <button class="btn-button btn-submit" type="submit">Add task</button>
      </div>
    </form>
  );
}