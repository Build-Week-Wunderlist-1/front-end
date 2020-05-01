import React, { useContext, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import ToDoListContext from "../ToDoListContext"
import ToDo from "./ToDo"
import ToDoForm from "./ToDoForm";
import TodoListContextProvider from "../ToDoListContext"
import { useHistory } from "react-router-dom";


const ToDoList = (props) => {
  const { push } = useHistory();
  // const { } = useContext(ToDoListContext)


  useEffect(() => {
    axiosWithAuth()
      .get("/api/lists/")
      .then(res => {
        console.log("TODOS:", res)
        // setTodos(res.data)
        push("/ToDoList")

      })
      .catch(err => (console.log("ERROR TO DISPLAY LIST OF DATA:", err)))
  }, [])


  return (
    <div>
      <TodoListContextProvider>
        <ToDoForm />
        {/* {
          todos.length ? (
            <ul className="list">
              {todos.map(todo => {
                return <ToDo todo={todo} key={todo.id} keyTwo={todo.todo_id} />;
              })}
            </ul>
          ) : (
              <div className="no-todos">No todos</div>
            )
        } */}
      </TodoListContextProvider>
    </div>
  );
};

export default ToDoList;

