import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleComplete, removeTask } from "../redux/actions"; 

function Main() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const todoCompleted = (id) => {
    dispatch(toggleComplete(id));
  };

  const addTask = () => {
    if (input.trim() !== "") {
      const newTask = { id: Date.now(), title: input, complete: false };
      dispatch(addTask(newTask));
      setInput("");
    }
  };

  const InputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>TODO APP</h1>
      <div className="input-container">
        <input value={input} type="text" onChange={InputChange} />
        <button onClick={addTask}>Додати</button>
      </div>
      <div>
        {tasks.map((task) => {
          return (
            <div className="taskStyle" key={task.id}>
              <input
                type="checkbox"
                checked={task.complete}
                onChange={() => todoCompleted(task.id)}
              />
              <div className="taskName">{task.title}</div>
              <div onClick={() => removeTask(task.id)} className="close">
                &times;
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
