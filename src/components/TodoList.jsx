import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, removeTodo }) {
	return (
		<ul class="max-w-sm flex flex-col">
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
			))}
		</ul>
	);
}

export default TodoList;