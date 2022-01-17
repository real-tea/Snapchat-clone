import React from 'react'
import './login.css';
import { Button } from '@material-ui/core'; 
import { useDispatch } from 'react-redux';
import { auth , provider } from './firebase';
import { login } from './features/appSlice';

 
const Login = () => {

    const dispatch = useDispatch();

    const signIn = () =>{

        auth.signInWithPopup(provider).then((result)=>{
            dispatch(
                login({ 
                    username : result.user.displayName, 
                    profilePic : result.user.photoURL,
                    id : result.user.uid
                })
            )
        }).catch((error) => {console.log(error)})

    }

    return (
        <div className = "login">
            <div className = "login__container">
                <img src = "https://knilt.arcc.albany.edu/images/9/95/1-snapchat.jpg" alt = ""/>
                <Button onClick = { signIn } variant = "outlined">Sign in</Button>
            </div>

        </div>
    )
}


export default Login;
