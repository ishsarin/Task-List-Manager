// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import { Tasks } from "./components/Tasks";
import { Buttons } from "./components/Buttons";
import { Header } from "./components/Header";
import { AddTask } from "./components/addTask";
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

  const rightClick = (id) => {
    // console.log(id);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, right: true, left: false } : task
      )
    );
  };

  const leftClick = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, right: false, left: true } : task
      )
    );
  };

  const [clicked, checkClicked] = useState(false);
  return (
    <div className="App container">
      {tasks.length > 0 ? <Header /> : ""}
      {tasks.length > 0 ? (
        <Tasks
          task={tasks}
          onDelete={deleteTask}
          rightClick={rightClick}
          leftClick={leftClick}
        />
      ) : (
        "Click on Add Standard"
      )}
      {clicked && <AddTask onAdd={addTaskonClick} />}

      <Buttons
        text={clicked ? "Close" : `Add a Standard`}
        clicked={() => checkClicked(!clicked)}
      />
    </div>
  );
}

export default App;
