import React, { useContext } from 'react';




const ToDo = ({ todo }) => {

	return (
		<div>
			<li className="list-item">
				<span>{todo.title}</span>
				<div>
					<button className="btn-delete-todo">Delete</button>
					<button className="btn-edit-todo">Edit</button>
				</div>
			</li>

		</div>
	);
};

export default ToDo;
