export const addTask = (task) => ({
    type: "ADD_TASK",
    payload: task,
  });
  
  export const toggleComplete = (taskId) => ({
    type: "TOGGLE_COMPLETE",
    payload: taskId,
  });
  
  export const removeTask = (taskId) => ({
    type: "REMOVE_TASK",
    payload: taskId,
  });
  