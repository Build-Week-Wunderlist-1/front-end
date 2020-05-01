import React, { useContext } from 'react';
import { ToDoListContext } from "../ToDoListContext"




const ToDo = ({ todo }) => {
	const { removeTodo } = useContext(ToDoListContext)

	return (
		<div>
			<li className="list-item">
				<span key={todo.id}>{todo.taskName}</span>
				<span key={todo.todo_id}>{todo.title}</span>
				<div>
					<button onClick={() => removeTodo(todo.id)} className="btn-delete-todo">Delete</button>
					<button className="btn-edit-todo">Edit</button>
					{/* <button onClick={() => findItem(todo.id)} className="btn-edit todo-btn" onClick={() => findItem(todo.id)}>
						<i className="fas fa-pen">hello</i>
					</button> */}
				</div>
			</li>

		</div>
	);
};

export default ToDo;
