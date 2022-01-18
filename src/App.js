import { useEffect } from 'react';
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
import { login , logout , selectUser } from './features/appSlice'
import { useDispatch , useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';


function App() {


  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(login({
          username : authUser.username,
          profilePic : authUser.photoURL,
          id : authUser.uid
        }))
      }else{
        dispatch(logout)
      }
    })
  },[])

  return (
    <div className="App">
      <Router>
      {!user ? <Login/> : (
        <>
        <img src = "https://knilt.arcc.albany.edu/images/9/95/1-snapchat.jpg" alt = ""/>         
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
         </>

      )}
       </Router>
      
    </div>
  );
}

export default App;
