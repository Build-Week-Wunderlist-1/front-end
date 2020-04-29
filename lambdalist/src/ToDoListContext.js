import React, { createContext, useState } from "react";

export const ToDoListContext = createContext()

const ToDoListContextProvider = (props) => {
    const [todos, setTodos] = useState([
        { title: "Testing One", id: 1 },
        { title: "Testing Two", id: 2 },
        { title: "Testing three", id: 3 },

    ])


    return (
        <ToDoListContext.Provider value={{ todos }}>
            {props.children}
        </ToDoListContext.Provider>
    )
}

export default ToDoListContextProvider;