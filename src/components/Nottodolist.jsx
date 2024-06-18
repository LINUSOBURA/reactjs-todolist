import React from "react";
import NotTodoCard from "./NotTodoCard";

export default function NotTodoList(props) {
  const { nottodos } = props;
  return (
    <span className="list">
      <h4>Don't</h4>
      <ul className="main">
        {nottodos.map((nottodo, nottodoIndex) => {
          return (
            <NotTodoCard {...props} key={nottodoIndex} index={nottodoIndex}>
              <p>{nottodo}</p>
            </NotTodoCard>
          );
        })}
      </ul>
    </span>
  );
}
