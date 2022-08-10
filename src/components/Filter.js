import React from "react";

const Filter = (props) => {
  return (
    <span
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      {props.name}
    </span>
  );
};

export default Filter;
