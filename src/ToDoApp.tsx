import React, { ReactElement, useState } from "react";


interface Props {
    todo: Todo;
    toggleToDo: ToggleTodo;
}


const initialTodos: Todo[] = [
    {
      text: 'Walk the dog',
      complete: false,
    },
    {
      text: 'Write app',
      complete: true,
    },
];

const TodoListItem: React.FC<Props> = ({ todo, toggleToDo }) => {
    return (
        <li>
          <label
            style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
          >
            <input
              type="checkbox"
              checked={todo.complete}
              onClick={() => {
                toggleToDo(todo);
              }}
            />{' '}
            {todo.text}
          </label>
        </li>
      );
};


function ToDoList() {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo = (selectedTodo: Todo) => {
        const newTodos = todos.map((todo) => {
          if (todo === selectedTodo) {
            return {
              ...todo,
              complete: !todo.complete,
            };
          }
          return todo;
        });
        setTodos(newTodos);
      };

    return (
      <ul>
        <TodoListItem todo={todos[0]} toggleToDo={toggleTodo} />
        <TodoListItem todo={todos[1]} toggleToDo={toggleTodo} />
      </ul>
    );
  }
  
  export default ToDoList;