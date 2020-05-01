import React, { createContext, useState, useEffect } from "react";
import ToDoList from "./components/ToDoList";
import { axiosWithAuth } from "./utils/axiosWithAuth"



export const ToDoListContext = createContext()

const ToDoListContextProvider = (props) => {
    const initialState = JSON.parse(localStorage.getItem('todos')) || []
    const [todos, setTodos] = useState(initialState)



    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    //Add Todo
    // const addTodo = (title) => {
    //     setTodos([...todos, { title, id: Date.now() }])
    // }

    // Remove todos
    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    //clearList 
    const clearList = () => {
        setTodos([])
    }




    return (
        <ToDoListContext.Provider value={{ todos, setTodos, removeTodo, clearList, }}>
            {props.children}
            <ToDoList />

        </ToDoListContext.Provider>
    )
}

export default ToDoListContextProvider;