import React, { useReducer, useRef } from "react";

function createBulkTodos() {
  const array = [];
  for (let i = 0; i < 5; i++) {
    array.push({ id: i, title: `할 일 ${i}`, checked: true });
  }
  return array;
}

const TODO_ACTION = {
  INSERT: 1,
  REMOVE: 2,
  TOGGLE: 3,
};
Object.freeze(TODO_ACTION);

function todoReducer(todos, action) {
  switch (action.type) {
    case TODO_ACTION.INSERT:
      return todos.concat(action.todo);
    case TODO_ACTION.REMOVE:
      return todos.filter((todo) => todo.id !== action.id);
    case TODO_ACTION.TOGGLE:
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

export default function TodoModel() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const nextId = useRef(todos.length + 1);

  const onInsert = (title) => {
    dispatch({
      type: TODO_ACTION.INSERT,
      todo: { id: nextId.current, title: title, checked: false },
    });
    nextId.current = nextId.current + 1;
  };

  const onDelete = (id) => {
    dispatch({ type: TODO_ACTION.REMOVE, id });
  };

  const onToggle = (id) => {
    dispatch({ type: TODO_ACTION.TOGGLE, id });
  };

  return [todos, onInsert, onDelete, onToggle];
}
