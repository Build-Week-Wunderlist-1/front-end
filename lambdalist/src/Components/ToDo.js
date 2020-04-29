import React, { useContext } from 'react';
import { ToDoListContext } from "../ToDoListContext"




const ToDo = ({ todo }) => {
	const { removeTodo } = useContext(ToDoListContext)

	return (
		<div>
			<li className="list-item">
				<span>{todo.title}</span>
				<div>
					<button onClick={() => removeTodo(todo.id)} className="btn-delete-todo">Delete</button>
					<button className="btn-edit-todo">Edit</button>
				</div>
			</li>

		</div>
	);
};

export default ToDo;
