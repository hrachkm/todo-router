import React from "react";

//Importamos nuestro contexto en el componente donde se utilizaran las props
import { TodoContext } from "../context/Todo/index";

import { Modal } from '../views/Modal/index';
import { TodoCounter } from "../views/TodoCounter";
import { TodoSearch } from "../views/TodoSearch";
import { TodoList } from "../views/TodoList";
import { TodoItem } from "../views/TodoItem";
import { TodoForm } from "../views/TodoForm";
import { CreateTodoButton } from "../views/CreateTodoButton";

export function AppUI() {
  // Otra forma de recibir datos del contexto es usar el hook use context de React
  // Tambien se puede desctructurar o dejarse como una variable general
  // Con esta implementacion no hace falta utilizar el consumer
  const value = React.useContext(TodoContext);

  return (
    <>
      <div className="container">
        <div className="content">
          <TodoCounter />
          <TodoSearch />
          <TodoList>
            {value.loading && <p>Cargando</p>}
            {value.error && <p>Error al cargar</p>}
            {!value.loading && !value.searchedTodos.length && (
              <p>Crea tu primer todo</p>
            )}
            {value.searchedTodos.map((item) => (
              <TodoItem
                key={item.text}
                text={item.text}
                done={item.done}
                onComplete={() => value.completeTodo(item.text)}
                onDelete={() => value.removeTodo(item.text)}
              />
            ))}
          </TodoList>
          {/*<TodoContext.Consumer>
            {
              (value) => {
                // Aqui utilizamos una funcion que envia por medio de un parametro todas las propiedades y metodos, declarados en el contexto
                // podemos recibirlos con un parametro global value o destructurarlo como en las props y recibir cada elemento por separado
                return (
                  <TodoList>
                    {value.loading && <p>Cargando</p>}
                    {value.error && <p>Error al cargar</p>}
                    {!value.loading && !value.searchedTodos.length && <p>Crea tu primer todo</p>}
                    {value.searchedTodos.map((item) => (
                      <TodoItem
                        key={item.text}
                        text={item.text}
                        done={item.done}
                        onComplete={() => value.completeTodo(item.text)}
                        onDelete={() => value.removeTodo(item.text)}
                      />
                    ))}
                  </TodoList>
                );
              }
            }
          </TodoContext.Consumer> */}
        </div>
        {!!value.openModal &&
          <Modal setOpenModal={value.setOpenModal}>
            <div>
              <TodoForm/>
            </div>
          </Modal>
        }
        <div className="content">
          <CreateTodoButton
            setOpenModal={value.setOpenModal}
          />
        </div>
      </div>
    </>
  );
}
