import React from 'react';

function TodoItem({ todo, toggleTodo, removeTodo }) {
	return (
	<li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
		<div class="relative flex items-start w-full">
			<div class="flex items-center h-5">
				<input
				id="hs-list-group-item-checkbox-1"
				name="hs-list-group-item-checkbox-1"
				type="checkbox"
				class="border-gray-200 rounded disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
				checked={todo.completed}
				onChange={() => toggleTodo(todo.id)}
				/>
			</div>
			<label for="hs-list-group-item-checkbox-1" class="ms-3.5 block w-full text-sm text-gray-600 dark:text-neutral-500">
				{todo.title}
			</label>
			<button className="text-red-500 hover:text-red-700" onClick={() => removeTodo(todo.id)}>
				[X]
			</button>
		</div>
	</li>
	);
}

export default TodoItem;