import React from 'react'
import { Check, Trash2 } from 'lucide-react'

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="py-4 flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
        />
        <label
          className={`ml-3 block text-gray-900 ${
            todo.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          {todo.text}
        </label>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => toggleTodo(todo.id)}
          className="mr-2 p-1 rounded-full text-purple-600 hover:bg-purple-100"
        >
          <Check className="h-5 w-5" />
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="p-1 rounded-full text-red-600 hover:bg-red-100"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </li>
  )
}

export default TodoItem
