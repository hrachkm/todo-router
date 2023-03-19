import React from "react";
import { TodoProvider } from "../context/Todo/index"; // - Importamos nuestro provider del archivo context
import { HashRouter, Link, Route, Routes } from "react-router-dom";

import { Home } from "./home/HomePage";
import { AddTodoPage } from "./add/AddTodoPage";
import { EditTodoPage } from "./update/UpdateTodo";

//Componente real

export function App() {
  return (
    <HashRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddTodoPage />}></Route>
          <Route path="/update/:id" element={<EditTodoPage />}></Route>
          <Route
            path="*"
            element={
              <>
                <p>404 Not found</p>
                <Link to="/">Return to home</Link>
              </>
            }
          ></Route>
        </Routes>
      </TodoProvider>
    </HashRouter>
  );
}
