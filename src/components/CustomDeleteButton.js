import React from "react";

const CustomDeleteButton = (props) => {
  return (
    <button
      className="todo__main__todoList__todoItem__customDeleteButton"
      onClick={props.onClick}
    >
      <div className="strike strike-1"></div>
      <div className="strike strike-2"></div>
    </button>
  );
};

export default CustomDeleteButton;
