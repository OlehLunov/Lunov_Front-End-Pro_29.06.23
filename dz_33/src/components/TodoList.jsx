import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/actions';
import "./TodoList.css";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul className='listStyle'>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span className='task'
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button className='delBtn' onClick={() => deleteTodo(todo.id)}>Видалити</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { deleteTodo, toggleTodo })(TodoList);
