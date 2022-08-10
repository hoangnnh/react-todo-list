import React, { useState } from "react";
import Filter from "./Filter";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const [filter, setFilter] = useState("All");

  const FILTER_MAPS = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAPS);

  const todoList = props.taskList
    .filter(FILTER_MAPS[filter])
    .map((task, idx) => {
      return (
        <TodoItem
          key={idx}
          completed={task.completed}
          id={task.id}
          name={task.name}
          onToggle={() => {
            props.toggleTaskCompleted(task.id);
          }}
          onDelete={() => {
            props.deleteTask(task.id);
          }}
        />
      );
    });

  const filterList = FILTER_NAMES.map((name, idx) => (
    <Filter
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <section className="todo__main">
      <ul className="todo__main__todoList">{todoList}</ul>

      <div className="todo__main__filters">
        <div className="todo__main__filters__left">
          <span>{props.tasksLeftCount}</span>
        </div>
        <div className="todo__main__filters__center">{filterList}</div>
        <div className="todo__main__filters__right">
          <span onClick={props.clearCompletedTasks}>Clear Completed</span>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
