import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["EAT", "SLEEP", "CODE"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  function addTask() {
    if (newTask.trim() === "") return;

    setTasks((t) => [...t, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div>
      <h1>To-Do List</h1>

      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />

      <button onClick={addTask}>ADD</button>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}

            <button onClick={() => deleteTask(index)}>
              DELETE
            </button>

            <button onClick={() => moveTaskUp(index)}>
              UP
            </button>

            <button onClick={() => moveTaskDown(index)}>
              DOWN
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;