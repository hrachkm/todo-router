import React from "react";

import { TodoContext } from '../../context/Todo/index';
import { TodoForm } from "../../views/TodoForm";

export function AddTodoPage() {
  const { addTodo } = React.useContext(TodoContext);
  return(
    <TodoForm title="Write your task" buttonText="Add" submitEvent={(value) => addTodo(value)} />
  );
}