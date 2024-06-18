import React from "react";

export default function NotTodoCard(props) {
  const { children, handleDeleteNotTodo, index, handleEditNotTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditNotTodo(index);
          }}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteNotTodo(index);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
