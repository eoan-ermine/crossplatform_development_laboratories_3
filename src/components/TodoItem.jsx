import React from 'react';

function TodoItem({ todo, toggleTodo }) {
	return (
		<div>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => toggleTodo(todo.id)}
			/>
			<span>{todo.title}</span>
		</div>
	);
}

export default TodoItem;