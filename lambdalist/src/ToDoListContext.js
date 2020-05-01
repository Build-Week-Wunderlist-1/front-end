
import React, { createContext, useState, useEffect } from 'react'
import ToDoList from "./components/ToDoList"
// import uuid from 'uuid'

export const TodoListContext = createContext()

const ToDoListContextProvider = props => {
    const initialState = JSON.parse(localStorage.getItem('todos')) || []

    const [todos, setTodos] = useState(initialState)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const [editItem, setEditItem] = useState(null)

    // Add todos
    const addTodo = title => {
        setTodos([...todos, { title, id: Date.now() }])
    }

    // Remove todos
    const removeTodo = id => {
        setTodos(todos.filter(task => task.id !== id))
    }

    // Clear todos
    const clearList = () => {
        setTodos([])
    }

    // Find task
    const findItem = id => {
        const item = todos.find(task => task.id === id)

        setEditItem(item)
    }

    // Edit task
    const editTodo = (title, id) => {
        const newTodos = todos.map(task => (task.id === id ? { title, id } : task))

        console.log(newTodos)

        setTodos(newTodos)
        setEditItem(null)
    }

    return (
        <TodoListContext.Provider
            value={{
                // todos,
                setTodos,
                addTodo,
                removeTodo,
                clearList,
                findItem,
                editTodo,
                editItem
            }}
        >
            <ToDoList todos={todos} />
            {props.children}
        </TodoListContext.Provider>
    )
}

export default ToDoListContextProvider;