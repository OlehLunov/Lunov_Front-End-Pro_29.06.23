import React from "react";
import { connect } from "react-redux";
import { addTask, toggleTask, removeTask } from "../actions/actions";

function Main(props) {
  const { tasks, input, addTask, toggleTask, removeTask, setInput } = props;

  function addTask() {
    if (input.trim() !== "") {
      const newTask = { id: Date.now(), title: input, complete: false };
      addTask(newTask);
      setInput("");
    }
  }

  function InputChange(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <h1>TODO APP</h1>
      <div className="input-container">
        <input value={input} type="text" onChange={InputChange} />
        <button onClick={addTask}>Додати</button>
      </div>
      <div>
        {tasks.map((task) => (
          <div className="taskStyle" key={task.id}>
            <input
              type="checkbox"
              checked={task.complete}
              onChange={() => toggleTask(task.id)}
            />
            <div className="taskName">{task.title}</div>
            <div onClick={() => removeTask(task.id)} className="close">
              &times;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  input: state.input,
});

const mapDispatchToProps = {
  addTask,
  toggleTask,
  removeTask,
  setInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
