import React from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.scss";
import cn from "classnames";

const TodoListItem = ({ todo, onDelete, onToggle }) => {
  const { title, checked } = todo;

  return (
    <div className="TodoListItem">
      <div
        className={cn("checkBox", { checked })}
        onClick={() => onToggle(todo.id)}
      >
        {checked ? (
          <MdCheckBox className={cn("pointer")} />
        ) : (
          <MdCheckBoxOutlineBlank className={cn("pointer")} />
        )}
        <div className="text">{title}</div>
      </div>
      <div className="remove" onClick={() => onDelete(todo.id)}>
        <MdRemoveCircleOutline className={cn("pointer")} />
      </div>
    </div>
  );
};

export default TodoListItem;
