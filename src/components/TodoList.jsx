import ToDoItem from './ToDoItem';

function ToDoList({ todos, deleteTodo, toggleComplete, startEditing, saveEditedTodo }) {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    startEditing={startEditing}
                    saveEditedTodo={saveEditedTodo}
                />
            ))}
        </ul>
    );
}

export default ToDoList;
