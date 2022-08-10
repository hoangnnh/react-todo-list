import React from "react";
import CustomDeleteButton from "./CustomDeleteButton";
import RoundedCheckbox from "./RoundedCheckbox";

const TodoItem = (props) => {
  return (
    <li className="todo__main__todoList__todoItem">
      <RoundedCheckbox
        id={props.id}
        completed={props.completed}
        onToggle={props.onToggle}
      />

      <span className="todo__main__todoList__todoItem__text">{props.name}</span>
      <CustomDeleteButton onClick={props.onDelete} />
    </li>
  );
};

export default TodoItem;
