import React from "react";
import NotTodoCard from "./NotTodoCard";

export default function NotTodoList(props) {
  const { nottodos } = props;
  return (
    <ul className="main">
      {nottodos.map((nottodo, nottodoIndex) => {
        return (
          <NotTodoCard {...props} key={nottodoIndex} index={nottodoIndex}>
            <p>{nottodo}</p>
          </NotTodoCard>
        );
      })}
    </ul>
  );
}
