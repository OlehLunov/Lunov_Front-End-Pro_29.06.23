import React, { useState } from 'react';
import './Main.css'

function Main() {
  const [clickCounts, setClickCounts] = useState({
    smiley1: 0,
    smiley2: 0,
    smiley3: 0,
    smiley4: 0,
    smiley5: 0,
  });

  const smileys = {
    smiley1: '😊',
    smiley2: '😄',
    smiley3: '😁',
    smiley4: '😇',
    smiley5: '💩',
  };

  const smileyClick = (smiley) => {

    setClickCounts((prevState) => ({
      ...prevState,
      [smiley]: prevState[smiley] + 1,
    }));
  };

  const winningSmiley = () => {
    const maxClicks = Math.max(...Object.values(clickCounts));
    const winningSmileyKey = Object.keys(clickCounts).find(
      (smiley) => clickCounts[smiley] === maxClicks
    );
    const winningSmiley = smileys[winningSmileyKey];
    return winningSmiley;
  };
  const showResults = () => {
    const winning = winningSmiley();
        alert(`Переміг смайлик: ${winning}`);
    };

  return (
    <div>
      <h1>Список смайликів</h1>
      {Object.entries(clickCounts).map(([smiley, count]) => (
        <div key={smiley}>
          <button onClick={() =>smileyClick(smiley)}>{smileys[smiley]}</button>
          <span>Кількість кліків: {count}</span>
        </div>
      ))}
      <button onClick={showResults}>Show Results</button>
    </div>
  );
}

export default Main;
