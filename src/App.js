import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Handle button click
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Handle keyboard input
  const handleKeyPress = (event) => {
    const key = event.key;

    if (/[0-9+\-*/.]/.test(key)) {
      handleClick(key);  // Append number or operator
    } else if (key === 'Enter') {
      calculate();  // Trigger calculation when "Enter" key is pressed
    } else if (key === 'Backspace') {
      setInput(input.slice(0, -1));  // Remove last character on "Backspace"
    }
  };

  // Calculate result
  const calculate = () => {
    try {
      setResult(eval(input).toString());
      setInput('');  // Clear input after calculating
    } catch (error) {
      setResult('Error');
    }
  };

  // Reset input and result
  const resetInput = () => {
    setInput('');
    setResult('');
  };

  // Add event listener for keyboard input
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input type="text" value={input} readOnly className="input" />
      <input type="text" value={result} readOnly className="result" />
      <div className="button-container">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button className="equals" onClick={calculate}>=</button>
        <button className="reset" onClick={resetInput}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
