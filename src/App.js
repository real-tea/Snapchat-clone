import React from 'react';

// import { Counter } from './features/counter/Counter';
import './App.css';
import WebcamCapture from './WebcamCapture';

function App() {
  return (
    <div className="App">
      <h1>
       Napchat
        <WebcamCapture/>
      </h1>
    </div>
  );
}

export default App;
