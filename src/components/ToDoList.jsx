import { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, addTodo, deleteTodo, toggleComplete, editTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo({ id: Date.now(), task, completed: false });
      setTask('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-grow p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Add new task"
        />
        <button
          type="submit"
          className="p-2 bg-gray-600 rounded-md text-white hover:bg-gray-500"
        >
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
