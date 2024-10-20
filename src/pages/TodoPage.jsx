import React, { useState } from 'react';
import TodoList from '../components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Read a book", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('none');

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  }

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;

    const newTodoItem = {
      id: Date.now(),
      title: newTodo,
      completed: false
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const applyFilter = function (items, filter) {
    if (filter == "none") return items;
    if (filter == "active") return todos.filter((todo) => todo.completed == false);
    if (filter == "inactive") return todos.filter((todo) => todo.completed == true);
  };

  return (
    <div className="">
      <h1>My To-Do List</h1>
      <form onSubmit={addTodo}>
        <div class="flex rounded-lg shadow-sm">
        <input
          className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new task..."
        />
        <button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" type="submit">Submit</button>
        </div>
      </form>
      <label for="filter-select" className="block text-sm font-medium mb-2 dark:text-white">Filter</label>
      <select
        name="filter"
        id="filter-select"
        className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      >
        <option value="none">None</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <TodoList todos={applyFilter(todos, filter)} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;