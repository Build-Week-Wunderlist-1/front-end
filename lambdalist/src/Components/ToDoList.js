import React, { useContext, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { ToDoListContext } from "../ToDoListContext"
import ToDo from "./ToDo"
import ToDoForm from "./ToDoForm";


const ToDoList = (props) => {
  const { todos, setTodos } = useContext(ToDoListContext);
  console.log("TODOS from ToDoList:", todos)

  useEffect(() => {
    axiosWithAuth()
      .get("/api/lists/")
      .then(res => {
        console.log("TODOS:", res)
        setTodos(res.data)

      })
      .catch(err => (console.log("ERROR TO DISPLAY LIST OF DATA:", err)))
  }, [])




  return (
    <div>

      <ToDoForm />
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

