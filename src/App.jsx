import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import "./App.css";
import { useUnmount } from "./useUnmount";
import { useMount } from "./useMount";
import Button from "./Button";

function App(props) {
  const [count, setCount] = useState(0);
  const [refreshCount, setRefreshCount] = useState(0);
  const [cube, setCube] = useState(0);

  const handleClick = useCallback (() => {
    setCount((count) => ++count);
  },[]);

  const memoizedValue = useMemo(() => {
    console.log("calculating..")
    const value = count * count * count;
    return value;
  }, [count]);


  console.log(memoizedValue);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <span>{count}</span>
        <Button onClick={handleClick}>increase1</Button>
        <Button onClick={()=>setRefreshCount((prev) => ++prev)}>
          increase2
        </Button>
      
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
