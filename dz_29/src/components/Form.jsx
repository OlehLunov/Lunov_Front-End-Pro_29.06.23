import React, { useState } from 'react';

function Form({ setShowForm, setContacts }) {
  const [newContact, setNewContact] = useState({ firstName: '', lastName: '', phone: '' });

  const saveContact = () => {
    const updatedContact = { ...newContact, name: newContact.firstName, username: newContact.lastName };
    setContacts(prevContacts => [...prevContacts, updatedContact]);
    setShowForm(false);
    setNewContact({ firstName: '', lastName: '', phone: '' });
  };

  return (
    <div>
      <h2>Форма контакту</h2>
      <input
        type="text"
        placeholder="Ім'я"
        value={newContact.firstName}
        onChange={e => setNewContact({ ...newContact, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Прізвище"
        value={newContact.lastName}
        onChange={e => setNewContact({ ...newContact, lastName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Телефон"
        value={newContact.phone}
        onChange={e => setNewContact({ ...newContact, phone: e.target.value })}
      />
      <button onClick={saveContact}>Зберегти</button>
      <button onClick={() => setShowForm(false)}>Скасувати</button>
    </div>
  );
}

export default Form;