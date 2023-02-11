import React from "react";

//Importamos nuestro contexto en el componente donde se utilizaran las props
import { TodoContext } from "../context/Todo/index";

import { TodoHeader } from "../views/TodoHeader";
import { Modal } from "../views/Modal/index";
import { TodoList } from "../views/TodoList";
import { TodoItem } from "../views/TodoItem";
import { TodoForm } from "../views/TodoForm";
import { TodoSearch } from "../views/TodoSearch";
import { TodoCounter } from "../views/TodoCounter";
import { CreateTodoButton } from "../views/CreateTodoButton";
import { ChangeAlert } from '../views/ChangeAlert';
//import { ChangeAlertWithStorageListener } from '../views/ChangeAlert';

export function AppUI() {
  // Otra forma de recibir datos del contexto es usar el hook use context de React
  // Tambien se puede desctructurar o dejarse como una variable general
  // Con esta implementacion no hace falta utilizar el consumer

  const value = React.useContext(TodoContext);

  /*const { state, setState } = React.useContext(TodoContext);

  const {
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    loading,
    error,
    openModal,
   } = state;

   const {
    setSearchValue,
    addTodo,
    completeTodo,
    removeTodo,
    setOpenModal,
    synchronizeTodos
   } = setState;*/

  return (
    <>
      <div className="container">
        <div className="content">
          <TodoHeader loading={value.loading}>
            <TodoCounter
              totalTodos={value.totalTodos}
              completedTodos={value.completedTodos}
              //loading={value.loading}
            />
            <TodoSearch
              searchValue={value.searchValue}
              setSearchValue={value.setSearchValue}
              //loading={value.loading}
            />
          </TodoHeader>
          <TodoList
            error={value.error}
            loading={value.loading}
            searchedTodos={value.searchedTodos}
            totalTodos={value.totalTodos}
            searchText={value.searchValue}
            onError={
              //utilizamos render props para indicar un error al componente
              () => <p>Error al cargar</p>
            }
            onLoading={() => <p>Cargando</p>}
            onEmpty={() => <p>Crea tu primer todo</p>}
            onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p>}
            render={ // Usando render props
              item => (
                <TodoItem
                  key={item.text}
                  text={item.text}
                  done={item.done}
                  totalTodos={item.totalTodos}
                  onComplete={() => value.completeTodo(item.text)}
                  onDelete={() => value.removeTodo(item.text)}
                />
            )}
          >
            {
              // Utilizando render functions
              item => (
              <TodoItem
                key={item.text}
                text={item.text}
                done={item.done}
                totalTodos={item.totalTodos}
                onComplete={() => value.completeTodo(item.text)}
                onDelete={() => value.removeTodo(item.text)}
              />
            )}
          </TodoList>
          {/**
           * <TodoList>
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
           *
           */}
        </div>
        {!!value.openModal && (
          <Modal setOpenModal={value.setOpenModal}>
            <div>
              <TodoForm />
            </div>
          </Modal>
        )}
        <div className="content">
          <CreateTodoButton setOpenModal={value.setOpenModal} />
        </div>
        <ChangeAlert
          synchronize={value.synchronizeTodos}
        />
      </div>
    </>
  );
}

/*<TodoContext.Consumer>
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
          </TodoContext.Consumer> */
