import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newTask) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    ));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <Header />
      <div className="w-full max-w-md p-4">
        <ToDoList
          todos={todos}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
