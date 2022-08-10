import React, { useState } from "react";
import { nanoid } from "nanoid";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [taskList, setTaskList] = useState([
    {
      id: `task-${nanoid()}`,
      name: "Go to the Gym",
      completed: false,
    },
    {
      id: `task-${nanoid()}`,
      name: "Go to the Hospital",
      completed: true,
    },
    {
      id: `task-${nanoid()}`,
      name: "Go to the Zoo",
      completed: false,
    },
  ]);

  const [formInput, setFormInput] = useState("");

  const handleFormInputChange = (event) => {
    setFormInput(event.target.value);
  };

  const createNewTask = (event) => {
    event.preventDefault();

    if (formInput.trim() === "") {
      return;
    }

    const newTask = {
      id: `task-${nanoid()}`,
      name: formInput.trim(),
      completed: false,
    };

    setTaskList([...taskList, newTask]);
    setFormInput("");
  };

  const toggleTaskCompleted = (id) => {
    const updatedTaskList = taskList.map((task, idx) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTaskList(updatedTaskList);
  };

  const deleteTask = (id) => {
    const updatedTaskList = taskList.filter((task, idx) => {
      return task.id !== id;
    });
    setTaskList(updatedTaskList);
  };

  const clearCompletedTasks = () => {
    const updatedTaskList = taskList.filter(
      (task, idx) => task.completed === false
    );

    setTaskList(updatedTaskList);
  };

  return (
    <div className="todo__container">
      <section className="todo__background"></section>
      <header className="todo__header">
        <h1 className="todo__header__title">Todo</h1>
      </header>
      <Form
        value={formInput}
        onChange={handleFormInputChange}
        createNewTask={createNewTask}
      />
      <TodoList
        taskList={taskList}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        tasksLeftCount={`${taskList.length} ${
          taskList.length > 1 ? "tasks" : "task"
        } left`}
        clearCompletedTasks={clearCompletedTasks}
      />
    </div>
  );
};

export default App;
