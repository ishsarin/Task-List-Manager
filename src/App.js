// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import { Tasks } from "./components/Tasks";
import { Buttons } from "./components/Buttons";
import { Header } from "./components/Header";
import { AddTask } from "./components/addTask";
import { DragDropContext } from "react-beautiful-dnd";
function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    // console.log("deleted", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTaskonClick = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    // console.log(id);
    setTasks([...tasks, newTask]);
  };

  const rightClick = (id, count) => {
    // console.log(id);
    // console.log("SR:", count);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, right: true, left: false } : task
      )
    );
  };

  const leftClick = (id, count) => {
    // console.log("SL:", count);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, right: false, left: true } : task
      )
    );
  };

  const doubleRightClick = (id, count) => {
    // console.log("DR:", count);
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,

              secondright: true,
              secondleft: false,
            }
          : task
      )
    );
  };

  const doubleleftClick = (id, count) => {
    // console.log("DL:", count);
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,

              secondright: "",
              secondleft: "",
            }
          : task
      )
    );
  };

  const handleOnDragEnd = (result) => {
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  };
  const [clicked, checkClicked] = useState(false);

  return (
    <div className="App container">
      {tasks.length > 0 ? <Header /> : ""}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {tasks.length > 0 ? (
          <Tasks
            task={tasks}
            onDelete={deleteTask}
            rightClick={rightClick}
            leftClick={leftClick}
            doubleRightClick={doubleRightClick}
            doubleleftClick={doubleleftClick}
          />
        ) : (
          "Click on Add Standard"
        )}
        {clicked && <AddTask onAdd={addTaskonClick} />}

        <Buttons
          text={clicked ? "Close" : `Add a Standard`}
          clicked={() => checkClicked(!clicked)}
        />
      </DragDropContext>
    </div>
  );
}

export default App;
