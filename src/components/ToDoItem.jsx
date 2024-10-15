import { useState } from 'react';

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newTask);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center mb-2 bg-gray-800 p-3 rounded-md shadow-md">
      <div className="flex items-center">
        {/* Checkbox for toggling completion */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="mr-3 h-5 w-5 cursor-pointer"
        />
        {isEditing ? (
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow bg-gray-700 p-2 text-white rounded-md mr-2 focus:outline-none"
          />
        ) : (
          <span
            className={`flex-grow cursor-pointer ${
              todo.completed ? 'line-through text-gray-500' : 'text-white'
            }`}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.task}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleSave} className="bg-gray-600 p-2 rounded-md hover:bg-gray-500">
            Save
          </button>
        ) : (
          <button onClick={handleEdit} className="bg-gray-600 p-2 rounded-md hover:bg-gray-500">
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-600 p-2 rounded-md hover:bg-red-500"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
