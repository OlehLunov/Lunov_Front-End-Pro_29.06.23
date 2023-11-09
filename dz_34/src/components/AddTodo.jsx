import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
// import "./AddTodo.css";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className='addBtn'>Додати задачу</button>
      </form>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);