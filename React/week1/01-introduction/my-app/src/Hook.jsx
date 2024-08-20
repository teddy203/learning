import React, { useState } from 'react';

// Custom Hook: useCounter
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return [count, increment, decrement, reset ];
}

// Counter Component

export default useCounter