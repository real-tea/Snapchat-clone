import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
// import { Counter } from './features/counter/Counter';
import './App.css';
import WebcamCapture from './WebcamCapture';
import Preview from './Preview';


function App() {
  return (
    <div className="App">
        <Router>
      <div className = "app__body">
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          
          <Route exact path="/" element = { <WebcamCapture/> }>
            
          </Route>
          <Route path = "/preview" element = { <Preview/> }>
            <Preview/>
          </Route>
        </Routes>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
