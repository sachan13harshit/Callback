import logo from './logo.svg';
import React, { useCallback } from 'react';
import './App.css';
import{ useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }
  ,[count]);
  return (
    <div className="App">
     <input 
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
     <button onClick={incrementCount}>Increment counter</button>
     <h3>Input text : {input}</h3>
     <h3>Count : {count}</h3>
     <hr/>
     <ChildComponent count={count} onClick={incrementCount}/>
    </div>
  );
}

const ChildComponent = React.memo(function({count , onClick}){
  console.log('ChildComponent Rendered');
  return (
    <div>
      <h2> This is a ChildComponent</h2>
      <button onClick={onClick}>Increment</button>
      <h4>Count : {count}</h4>
    </div>
  )
})


export default App;
