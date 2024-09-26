import React from 'react';

function TodoItem({ todo, toggleTodo, removeTodo }) {
	return (
		<div>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => toggleTodo(todo.id)}
			/>
			<span>{todo.title}</span>
			<button onClick={() => removeTodo(todo.id)}>
				[X]
			</button>
		</div>
	);
}

export default TodoItem;