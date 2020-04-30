import React, { createContext, useState, useEffect } from "react";
import ToDoList from "./components/ToDoList";
import { axiosWithAuth } from "./utils/axiosWithAuth"



export const ToDoListContext = createContext()

const ToDoListContextProvider = (props) => {
    const initialState = JSON.parse(localStorage.getItem('todos')) || []
    const [todos, setTodos] = useState(initialState)
    console.log("localStorage.getItem(token)", localStorage.getItem("token"))

    //edit Todo
    const [editItem, setEditItem] = useState(false)
    const [todoToEdit, setTodoToEdit] = useState(initialState);


    // useEffect(() => {
    //     axiosWithAuth()
    //         .get("/api/lists/")
    //         .then(res => {
    //             console.log("TODOS from GET LIST endpoint:", res.data)
    //             setTodos(res.data)

    //         })
    //         .catch(err => (console.log("ERROR TO DISPLAY LIST OF DATA:", err)))
    // }, [])



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
        setEditItem(true)
    }


    return (
        <ToDoListContext.Provider value={{ todos, setTodos, addTodo, removeTodo, clearList, findItem, editItem, editTodo }}>
            {props.children}
            <ToDoList />

        </ToDoListContext.Provider>
    )
}

export default ToDoListContextProvider;