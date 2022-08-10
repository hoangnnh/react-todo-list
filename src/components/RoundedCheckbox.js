import React from "react";

const RoundedCheckbox = (props) => {
  // console.log(props.completed)
  return (
    <div className="todo__main__todoList__todoItem__roundedCheckbox">
      <input
        type="checkbox"
        id={props.id}
        checked={props.completed}
        onChange={props.onToggle}
      />
      <label htmlFor={props.id}></label>
    </div>
  );
};

export default RoundedCheckbox;
