import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="App-header">
      <div className="logo">Your Logo</div>
      <div className="links">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
      </div>
      <div className="buttons">
        <button>Логин</button>
        <button>Регистрация</button>
      </div>
    </header>
  );
};

export default Header;
