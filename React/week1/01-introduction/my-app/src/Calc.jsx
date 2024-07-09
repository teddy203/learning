import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 text-right text-lg border rounded"
            value={input}
            readOnly
          />
          <div className="text-right text-2xl mt-2">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'].map(
            (value) => (
              <button
                key={value}
                className="p-4 bg-gray-300 text-lg rounded"
                onClick={() => handleClick(value)}
              >
                {value}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default App;



