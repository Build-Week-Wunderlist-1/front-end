import React, { useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { ToDoListContext } from "../ToDoListContext"
import ToDo from "./ToDo"

const ToDoList = () => {
<<<<<<< HEAD
  const { todos } = useContext(ToDoListContext);

  return (
    <div>
      <ul className="list">
        {todos.map(todo => {
          return <ToDo todo={todo} key={todo.id} />
        })}
      </ul>
=======

  return (
    <div>

      <ul className="list"></ul>
>>>>>>> eb6406c71b25060972553a59e3360cdfad38856d
    </div>
  );
};

export default ToDoList;