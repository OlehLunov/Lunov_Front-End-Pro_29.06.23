import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="App-header">
      <a className="logo">LOGO</a>
      <div className="links">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
      </div>
      <div className="btn">
        <button className='btn_log'>Логин</button>
        <button className='btn_reg'>Регистрация</button>
      </div>
    </header>
  );
};

export default Header;
