const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "TOGGLE_COMPLETE":
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, complete: !task.complete };
        }
        return task;
      });
      return { ...state, tasks: updatedTasks };
    case "REMOVE_TASK":
      const filteredTasks = state.tasks.filter((task) => task.id !== action.payload);
      return { ...state, tasks: filteredTasks };
    default:
      return state;
  }
};

export default tasksReducer;
