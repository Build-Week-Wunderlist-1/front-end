import React, { createContext, useState } from "react";
import uuid from "uuid"


export const ToDoListContext = createContext()

const ToDoListContextProvider = (props) => {
    const [todos, setTodos] = useState([
        { title: "Testing One", id: 1 },
        { title: "Testing Two", id: 2 },
        { title: "Testing three", id: 3 },

    ])

    //Add Todo
    const addTodo = (title) => {
        setTodos([...todos, { title, id: uuid() }])
    }

    // Remove todos
    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    //clearList 
    const clearList = () => {
        setTodos([])
    }



    return (
        <ToDoListContext.Provider value={{ todos, addTodo, removeTodo, clearList }}>
            {props.children}
        </ToDoListContext.Provider>
    )
}

export default ToDoListContextProvider;