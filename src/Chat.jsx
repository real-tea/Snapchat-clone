import { Avatar } from '@mui/material';
import React from 'react';
import './chat.css';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import ReactTimeago from 'react-timeago';
import { selectImage } from './features/appSlice';
import { useDispatch } from 'react-redux';
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';

const Chat = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const open = () => {
        if(!props.read){
            dispatch(selectImage(props.imageUrl));
            db.collection('posts').doc(props.id).set(
                {
                    read : true
                },
                {
                    merge : true
                }
            );
            navigate('/chats/view');
        }
    }

    return (
        <div onClick = { open }className = "chat">
            <Avatar className =  "chat__avatar" src = { props.profilePic }/>
            <div className = "chat__info">
                <h4>{ props.username }</h4>
                <p>
                    {!props.read && "tap to view - "}{""}
                <ReactTimeago date = { new Date(props.timestamp?.toDate()).toUTCString(
                ) }/></p>
            </div>

                {!props.read && <StopRoundedIcon className = "chat__readIcon"/>}

        </div>
    )
}

export default Chat;
