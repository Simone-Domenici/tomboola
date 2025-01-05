import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [numbers, setNumbers] = useState([]);
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const [lastNumber, setLastNumber] = useState(null);

  useEffect(() => {
    const nums = Array.from({ length: 90 }, (_, i) => i + 1);
    setNumbers(nums);
  }, []);

  const drawNumber = () => {
    if (numbers.length === 0) return;
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const newNumber = numbers[randomIndex];
    setDrawnNumbers([...drawnNumbers, newNumber]);
    setLastNumber(newNumber);
    setNumbers(numbers.filter(num => num !== newNumber));
  };

  const resetGame = () => {
    const nums = Array.from({ length: 90 }, (_, i) => i + 1);
    setNumbers(nums);
    setDrawnNumbers([]);
    setLastNumber(null);
  };

  return (
    <>
      <h1 className='main-title'>Tomboola</h1>
      <div className='container'>
        <div className='numbers'>
          {Array.from({ length: 90 }, (_, i) => i + 1).map(number => (
              <div
                className={`num ${drawnNumbers.includes(number) ? 'drawn' : ''}`}
                key={number}
              >
                {number}
              </div>
          ))}
        </div>
        <div className='draw'>
            <h2>Ultimo numero estratto</h2>
            <div className='last-number'>{lastNumber !== null ? lastNumber : 0}</div>
            <hr />
            <div className='buttons'>
              <button className='draw-btn' onClick={drawNumber}>Estrai Numero</button>
              <button className='reset-btn' onClick={resetGame}>Resetta</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
