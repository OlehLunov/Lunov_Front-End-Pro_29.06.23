import React, { useState } from 'react';
import './Main.css'

function Main() {
  const [clickCounts, setClickCounts] = useState({
    smile1: 0,
    smile2: 0,
    smile3: 0,
    smile4: 0,
    smile5: 0,
  });

  const smileys = {
    smile1: '😊',
    smile2: '😄',
    smile3: '😁',
    smile4: '😇',
    smile5: '💩',
  };

  const smileClick = (smile) => {

    setClickCounts((prevState) => ({
      ...prevState,
      [smile]: prevState[smile] + 1,
    }));
  };

  const winningSmile = () => {
    const maxClicks = Math.max(...Object.values(clickCounts));
    const winningSmileKey = Object.keys(clickCounts).find(
      (smile) => clickCounts[smile] === maxClicks
    );
    const winningSmile = smileys[winningSmileKey];
    return winningSmile;
  };
  const showResults = () => {
    const winning = winningSmile();
        alert(`Переміг смайлик: ${winning}`);
    };

  return (
    <div>
      <h1>Список смайликів</h1>
      {Object.entries(clickCounts).map(([smile, count]) => (
        <div className='smiles' key={smile}>
          <button  className='smile__btn' onClick={() =>smileClick(smile)}>{smileys[smile]}</button>
          <span>Кількість кліків: {count}</span>
        </div>
      ))}
      <button className='show' onClick={showResults}>Show Results</button>
    </div>
  );
}

export default Main;
