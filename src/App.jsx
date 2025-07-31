import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTodo = () => {
    if (newTask.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTask, completed: false, editing: false },
      ]);
      setNewTask('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const startEditing = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, editing: true } : todo
    ));
  };

  const saveEditedTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText, editing: false } : todo
    ));
  };

  return (
    <div className="app">
      <Header />
      <div className="input-section">
        <input
          type="text"
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        startEditing={startEditing}
        saveEditedTodo={saveEditedTodo}
      />
    </div>
  );
}

export default App;
