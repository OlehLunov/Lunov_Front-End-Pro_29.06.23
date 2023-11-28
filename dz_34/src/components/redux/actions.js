export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});

export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
  payload: error,
});

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch(fetchTodosRequest());
    try {
      const response = await fetch('https://654d3e3177200d6ba85a2f0a.mockapi.io/api1/Todos');
      const data = await response.json();
      dispatch(fetchTodosSuccess(data));
    } catch (error) {
      dispatch(fetchTodosFailure(error));
    }
  };
};

export const addTodo = (text) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://654d3e3177200d6ba85a2f0a.mockapi.io/api1/Todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('Failed to add todo');
      }

      const data = await response.json();

    
      dispatch({
        type: 'ADD_TODO',
        payload: { text, id: data.id, completed: false },
      });
    } catch (error) {
      console.error('Error adding todo:', error);
    
    }
  };

  
};

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: { id },
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: { id },
});
