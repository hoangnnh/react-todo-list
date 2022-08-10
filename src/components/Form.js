import React from "react";

const Form = (props) => {
  return (
    <form className="todo__form" onSubmit={props.createNewTask}>
      <label htmlFor="newTask" className="todo__form__label">
        What needs to be done?
      </label>
      <input
        autoComplete="off"
        className="todo__form__input"
        id="newTask"
        type="text"
        placeholder="e.g. Finish homework before 5pm, etc."
        value={props.value}
        onChange={props.onChange}
      />
    </form>
  );
};

export default Form;
