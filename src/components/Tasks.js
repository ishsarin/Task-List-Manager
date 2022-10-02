import React from "react";
import { Task } from "./Task";

export const Tasks = ({ task, onDelete, rightClick, leftClick }) => {
  return (
    <>
      {task.map((task) => (
        <Task
          task={task}
          key={task.id}
          onDelete={onDelete}
          rightClick={rightClick}
          leftClick={leftClick}
        />
      ))}
    </>
  );
};
