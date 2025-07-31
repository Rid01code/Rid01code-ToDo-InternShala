import { useState } from 'react';
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';

function ToDoItem({ todo, deleteTodo, toggleComplete, startEditing, saveEditedTodo }) {
    const [editedText, setEditedText] = useState(todo.text);

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {todo.editing ? (
                <>
                    <input
                        type="text"
                        value={editedText}
                        onChange={e => setEditedText(e.target.value)}
                    />
                    <button onClick={() => saveEditedTodo(todo.id, editedText)}>
                        <FaCheck />
                    </button>
                </>
            ) : (
                <>
                    <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
                    <div className="actions">
                        <button onClick={() => startEditing(todo.id)} title="Edit">
                            <FaEdit size={22}/>
                        </button>
                        <button onClick={() => deleteTodo(todo.id)} title="Delete">
                            <FaTrash />
                        </button>
                    </div>
                </>
            )}
        </li>
    );
}

export default ToDoItem;
