import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

//Importamos nuestro contexto en el componente donde se utilizaran las props
import { TodoContext } from "../../context/Todo/index";

import { TodoHeader } from "../../views/TodoHeader";
//import { Modal } from "../../views/Modal/index";
import { TodoList } from "../../views/TodoList";
import { TodoItem } from "../../views/TodoItem";
import { TodoSearch } from "../../views/TodoSearch";
import { TodoCounter } from "../../views/TodoCounter";
import { CreateTodoButton } from "../../views/CreateTodoButton";
import { ChangeAlert } from '../../views/ChangeAlert';

export function HomeUI() {
  // Otra forma de recibir datos del contexto es usar el hook use context de React
  // Tambien se puede desctructurar o dejarse como una variable general
  // Con esta implementacion no hace falta utilizar el consumer

  const value = React.useContext(TodoContext);
  const navigate = useNavigate();
  const location = useLocation();

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
                  key={item.id}
                  text={item.text}
                  done={item.done}
                  totalTodos={item.totalTodos}
                  onComplete={() => value.completeTodo(item.id)}
                  onEdit={() => navigate(`/update/${item.id}`, {
                    state: item
                  })}
                  onDelete={() => value.removeTodo(item.id)}
                />
            )}
          >
            {
              // Utilizando render functions
              item => (
              <TodoItem
                key={item.id}
                text={item.text}
                done={item.done}
                totalTodos={item.totalTodos}
                onComplete={() => value.completeTodo(item.id)}
                onEdit={() => navigate(`/update/${item.id}`, {
                  state: item
                })}
                onDelete={() => value.removeTodo(item.id)}
              />
            )}
          </TodoList>
        </div>
        {/*!!value.openModal && (
          <Modal setOpenModal={value.setOpenModal}>
            <div>
              <TodoForm />
            </div>
          </Modal>
        )*/}
        <div className="content">
          <CreateTodoButton/>
        </div>
        <ChangeAlert
          synchronize={value.synchronizeTodos}
        />
      </div>
    </>
  );
}