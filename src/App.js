import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from 'element-react';
import 'element-theme-default';

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(2);
  console.log(count)
  console.log(setCount)
  console.log(useState)
  useEffect(() => {
    // Update the document title using the browser API
    document.title = ` ${count} times`;
  }, [count]);
  return (
    <div>
      <Button type='primary'>button</Button>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>num is {num}</p>
      <button onClick={() => setNum(num + count)}>
        Click me num
      </button>
    </div>
  )
}

export default App;
