import React, { useContext, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { ToDoListContext } from "../ToDoListContext"
import ToDo from "./ToDo"

const ToDoList = (props) => {
  const { todos } = useContext(ToDoListContext);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/lists/")
      .then(res => {
        // props.setTodos(res.data)
        console.log("TODOS:", res)
      })
  })
    .catch(err => (console.log("ERROR TO DISPLAY LIST OF DATA:", err)))



  return (
    <div>
      {
        todos.length ? (
          <ul className="list">
            {todos.map(todo => {
              return <ToDo todo={todo} key={todo.id} />;
            })}
          </ul>
        ) : (
            <div className="no-todos">No todos</div>
          )
      }
    </div>
  );
};

export default ToDoList;

