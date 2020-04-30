import React, { useState, useContext, useEffect } from 'react'
import { ToDoListContext } from "../ToDoListContext";
import { axiosWithAuth } from '../utils/axiosWithAuth';



const ToDoForm = (props) => {
    const { clearList, editToDo, editItem, todos, setTodos } = useContext(ToDoListContext)
    const [title, setTitle] = useState('')





    const handleChange = (e) => {
        setTodos(
            {
                todos: {
                    ...todos, [e.target.name]: e.target.value
                }
            }
        )
    }




    const addItem = (e) => {
        axiosWithAuth()
            .post(`/api/lists /${todos.id}`)
            .then(res => {
                console.log("New Todo added - res", res)
                setTodos(
                    [...todos]
                )
                props.history.push("/protected")
            }).catch(err => {
                console.log("COULD NOT ADD NEW TODO - from ToDoForm", err)

            })
    }






    return (
        <form className="form">
            <input
                type="text"
                placeholder="Add Todo..."
                value={title}
                onChange={handleChange}
                required
                className="Todo-input"
            />
            <div className="buttons">
                <button onClick={addItem} type="submit" className="add-Todo" >
                    {/* {editItem ? 'Edit Todo' : 'Add Todo'} */}
                    Add ITEM
                </button>
                <button className="btn clear-btn" onClick={clearList}>
                    Clear
        </button>
            </div>
        </form>
    )

}

export default ToDoForm;



