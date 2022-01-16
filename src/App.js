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
import Chats from './Chats';
import ChatView from './ChatView';


function App() {
  return (
    <div className="App">
        <Router>
      <div className = "app__body">
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes> {/* changed from Switch to routes in react-router-dom v6?  */}
          <Route path = "/chats" element = { <Chats/> }></Route>
          <Route exact path="/" element = { <WebcamCapture/> }></Route>
          <Route path = "/preview" element = { <Preview/> }>
            {/* <Preview/> */}
          </Route>
          <Route path = "/chats/view" element = { <ChatView/> }></Route>
        </Routes>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
