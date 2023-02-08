import React, { useCallback, useRef, useState } from "react";
import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const inputEL = useRef(null);

  const onInsert_click = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(value);
      setValue("");
      inputEL.current.focus();

      if (value.length === 0) {
        alert("할 일을 입력해주세요.");
        inputEL.current.focus();
      }
    },
    [value]
  );

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <form className="TodoInsert" onSubmit={onInsert_click}>
      <input
        placeholder="할일입력"
        value={value}
        onChange={onChange}
        ref={inputEL}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
