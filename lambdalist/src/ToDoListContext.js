import React, { createContext, useState, useEffect } from "react";
import { uuid } from "react-uuid";
import ToDoList from "./components/ToDoList";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm"



export const ToDoListContext = createContext()

const ToDoListContextProvider = (props) => {
    const initialState = JSON.parse(localStorage.getItem('todos')) || []
    const [todos, setTodos] = useState(initialState)

    //edit Todo
    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    //Add Todo
    const addTodo = (title) => {
        setTodos([...todos, { title, id: Date.now() }])
    }

    // Remove todos
    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    //clearList 
    const clearList = () => {
        setTodos([])
    }

    const findItem = id => {
        const item = todos.find(todo => todo.id === id)

        setEditItem(item)
    }

    const editTodo = (title, id) => {
        const newTodos = todos.map(todo => (todo.id === id ? { title, id } : todo))

        console.log(newTodos)

        setTodos(newTodos)
        setEditItem(null)
    }


    return (
        <ToDoListContext.Provider value={{ todos, setTodos, addTodo, removeTodo, clearList, findItem, editItem, editTodo }}>
            {props.children}
            <ToDoList />
            {/* <ToDo />
            <ToDoForm /> */}
        </ToDoListContext.Provider>
    )
}

export default ToDoListContextProvider;