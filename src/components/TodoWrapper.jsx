import { TodoForm } from "./TodoForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./TodoList";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };
  const toggleCompleate = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };
  return (
    <div>
      <h2 className="mb-3 ml-4 text-2xl">Lista della Spesa:</h2>

      <TodoForm addTodo={addTodo}></TodoForm>
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <TodoList
            task={todo}
            key={todo.id}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            toggleCompleate={toggleCompleate}
          />
        )
      )}
    </div>
  );
};
