import useCounter from './Hook'

function Counter() {
    const [ count, increment, decrement, reset ] = useCounter();
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter: {count}</h1>
        <button onClick={increment} style={{ margin: '5px' }}>Increase</button>
        <button onClick={decrement} style={{ margin: '5px' }}>Decrease</button>
        <button onClick={reset} style={{ margin: '5px' }}>Reset</button>
      </div>
    );
  }
  
  
  function App() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
  
  export default Counter;









