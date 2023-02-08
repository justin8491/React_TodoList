import React, { useState, useRef, useCallback, useReducer } from "react";
import { MdLabelImportant } from "react-icons/md";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import TodoModel from "./TodoModel";

const App = () => {
  const [todos, onInsert, onDelete, onToggle] = TodoModel();
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
