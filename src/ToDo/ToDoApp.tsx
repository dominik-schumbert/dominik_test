import React, { useState } from "react";
import { TodoList } from './ToDoList';


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

function ToDoListApp() {
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

    return <TodoList todos={todos} toggleTodo={toggleTodo} />
  }
  
  export default ToDoListApp;