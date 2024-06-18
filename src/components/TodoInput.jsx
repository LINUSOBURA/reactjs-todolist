import { useState } from "react";

export default function TodoInput(props) {
  const {
    handleAddTodos,
    handleAddNotTodos,
    todoValue,
    notTodoValue,
    setNotTodoValue,
    setTodoValue,
    radioValue,
    setRadioValue,
  } = props;

  return (
    <div>
      <header>
        <div className="todoOrNot">
          <input
            checked={radioValue === "todo"}
            name="todo"
            type="radio"
            value="todo"
            onChange={(e) => setRadioValue(e.target.value)}
          />{" "}
          Todo
          <input
            checked={radioValue === "notTodo"}
            name="todo"
            type="radio"
            value="notTodo"
            onChange={(e) => setRadioValue(e.target.value)}
          />{" "}
          Not Todo
        </div>
      </header>
      <br />

      <header>
        <input
          value={radioValue === "todo" ? todoValue : notTodoValue}
          onChange={(e) => {
            if (radioValue === "todo") {
              setTodoValue(e.target.value);
            } else {
              setNotTodoValue(e.target.value);
            }
          }}
          placeholder="Enter task ..."
        />
        <button
          onClick={() => {
            if (radioValue === "todo") {
              handleAddTodos(todoValue);
              setTodoValue("");
            } else {
              handleAddNotTodos(notTodoValue);
              setNotTodoValue("");
            }
          }}
        >
          Add
        </button>
      </header>
    </div>
  );
}
