import React, { useState } from 'react';
import TodoList from './components/TodoList';

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
    <div>
      <h1>My To-Do List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new task..."
        />
        <button type="submit">Add</button>
      </form>
      <span>Filter:</span>
      <select
        name="filter"
        id="filter-select"
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