import React from "react";

import { TodoForm } from "../../views/TodoForm";
import { TodoContext } from "../../context/Todo/index";
import { useLocation, useParams } from "react-router-dom";

export function EditTodoPage() {
  const { getTodo, editTodo, loading } = React.useContext(TodoContext);
  const location = useLocation();
  const { id } = useParams();
  const fixedId = Number(id);
  const [todo, setTodo] = React.useState({});

  //Ahora preguntamos si el location trae alguna informacion de los todos
  //Estose hace para prevenir que un usuario entre directamente con la url y se genere un error

  React.useMemo(() => {
    if(location.state){
      setTodo({
        ...todo,
        text: location.state.text
      })
    } else {
      setTodo(getTodo(fixedId));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  if(loading){
    return(
      <p>...Cargando</p>
    )
  } else {
    return(
      <TodoForm title="Edit your TODO" buttonText="Update" content={todo} submitEvent={(value) => {editTodo(fixedId, value)}}/>
    );
  }
}