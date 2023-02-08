import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <div className="ToDoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
