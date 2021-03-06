import React from 'react';
import { useNavigate } from 'react-router-dom';
import { selectSelectedImage } from './features/appSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './chatview.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const ChatView = () => {
    
    const navigate = useNavigate();
    const selectImage = useSelector(selectSelectedImage);

    useEffect(() =>{
        if(!selectImage)exit();
    },[selectImage])

    const exit = () =>{
        navigate('/chats');
    }

    return (
        <div onClick = { exit } className = "ChatView">
            <img src = { selectImage } alt = ""/>   
            <div className = "chat__timer">
            <CountdownCircleTimer
            isPlaying
            duration = {10}
            strokeWidth = {6}
            size = {50}
            colors={[
                '#004777', 
                '#F7B801', 
                '#A30000', 
                '#A30000']}
            colorsTime = {[10 , 5 , 3, 0]}
            >     
            {({remainingTime}) =>{
                if(remainingTime === 0)
                exit();
            }}           
            </CountdownCircleTimer>        
            </div>
        </div>
    )
}

export default ChatView; 
