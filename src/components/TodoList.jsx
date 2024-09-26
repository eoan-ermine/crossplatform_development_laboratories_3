import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, removeTodo }) {
	return (
		<div>
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
			))}
		</div>
	);
}

export default TodoList;