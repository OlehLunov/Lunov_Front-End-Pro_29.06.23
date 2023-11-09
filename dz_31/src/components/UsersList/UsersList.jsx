import React, { useState, useEffect } from 'react';
import "./UsersList.css"
import { Link } from 'react-router-dom';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users: ', error));
  }, []);

  return (
    <div className='mainContainer'>
      <h1>Список користувачів</h1>
      <ul >
        {users.map(user => (
          <li  className='usersList' key={user.id}>
            {user.name}
              <Link to={`/user/${user.id}/albums`}>
                <button className='userBtn'>Albums</button>
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;