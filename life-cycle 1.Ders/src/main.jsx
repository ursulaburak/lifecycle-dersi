import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App2 from './App2.jsx';
import App from './App.jsx';
import './index.css';


const Root = () => {
    const [isVisible, setIsVisible] = useState(true);

  const app = isVisible ? <App2 /> : null;

    return (
    <>
      <div style={{ display:"flex", flexDirection: "column" }}>
          <button onClick={() =>  setIsVisible((prev) => !prev)}>Toggle</button>
          {app}
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);