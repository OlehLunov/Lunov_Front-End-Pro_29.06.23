import React, { useState, useEffect } from 'react';
import Form from './Form';
import './ListStyle.css';

function MainList() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newContact, setNewContact] = useState({ firstName: '', lastName: '', phone: '' });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const saveContact = () => {
    const updatedContact = { ...newContact, name: newContact.firstName, username: newContact.lastName };
    setContacts(prevContacts => [...prevContacts, updatedContact]);
    setShowForm(false);
    setNewContact({ firstName: '', lastName: '', phone: '' });
  };

  return (
    <div className="main-container">
      <h1>Список контактів</h1>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        {showForm && (
            <tr>
              <td>{newContact.firstName}</td>
              <td>{newContact.lastName}</td>
              <td>{newContact.phone}</td>
            </tr>
        )}
        </tbody>
      </table>

      <button onClick={() => setShowForm(true)}>Додати контакт</button>

      {showForm && <Form setShowForm={setShowForm} setContacts={setContacts} />}
    </div>
  );
}

export default MainList;