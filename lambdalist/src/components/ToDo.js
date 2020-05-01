import React, { useContext } from 'react';
import ToDoListContext from "../ToDoListContext"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { useHistory } from "react-router-dom";



const ToDo = ({ todo }) => {
	const { removeTodo, findItem } = useContext(ToDoListContext)
	return (
		<li className="list-item">
			<span>{todo.title} </span>
			<span>{todo.taskName}</span>
			<div>
				<button
					className="btn-delete todo-btn"
					onClick={() => removeTodo(todo.id)}
				>
					<i className="fas fa-trash-alt"></i>
				</button>{' '}
				<button className="btn-edit todo-btn" onClick={() => findItem(todo.id)}>
					<i className="fas fa-pen"></i>
				</button>
			</div>
		</li>
	)
};

export default ToDo;
