import { useState } from "react";

const AddTodo = ({ tasks, setTasks }) => {
  const [taskInput, setTaskInput] = useState("");

  const addTodo = () => {
    const newTab = [...tasks];
    newTab.push({ description: taskInput, status: false });
    setTasks(newTab);
    setTaskInput("");
  };

  return (
    <div className="addTodo container__small row">
      <input
        className="addTodo__input"
        value={taskInput}
        type="text"
        name="task"
        id="task"
        placeholder="Add your task"
        onChange={(event) => {
          setTaskInput(event.target.value);
        }}
      />
      <button className={!taskInput ? "disabled" : null} onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
