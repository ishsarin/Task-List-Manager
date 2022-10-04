import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";

export const Tasks = ({
  task,
  onDelete,
  rightClick,
  leftClick,
  doubleRightClick,
  doubleleftClick,
}) => {
  return (
    <>
      <Droppable droppableId=" container">
        {(provided) => (
          <div
            className="container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {task.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={task.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <Task
                      task={task}
                      onDelete={onDelete}
                      rightClick={rightClick}
                      leftClick={leftClick}
                      doubleRightClick={doubleRightClick}
                      doubleleftClick={doubleleftClick}
                      // moveClick={moveClick}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
};
