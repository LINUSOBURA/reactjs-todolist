import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;
  return (
    <span className="list">
      <h4>Do</h4>
      <ul className="main">
        {todos.map((todo, todoIndex) => {
          return (
            <TodoCard {...props} key={todoIndex} index={todoIndex}>
              <p>{todo}</p>
            </TodoCard>
          );
        })}
      </ul>
    </span>
  );
}
