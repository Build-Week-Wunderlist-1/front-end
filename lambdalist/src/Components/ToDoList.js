import React, { useContext } from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth"
import { ToDoListContext } from "../ToDoListContext"
import ToDo from "./ToDo"

const ToDoList = () => {
  const { todos } = useContext(ToDoListContext);

  return (
    <div>
      <ul className="list">
        {todos.map(todo => {
          return <ToDo todo={todo} key={todo.id} />
        })}
      </ul>
    </div>
  );
};

export default ToDoList;