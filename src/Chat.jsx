import { Avatar } from '@mui/material';
import React from 'react';
import './chat.css';
import StopRoundedIcon from '@material-ui/icons/StopRounded';

const Chat = (props) => {
    return (
        <div className = "chat">
            <Avatar src = { props.profilePic }/>
            <div className = "chat__info">
                <h4>{ props.username }</h4>
                <p>tap to view - { new Date(props.timestamp?.toDate()).toUTCString(
                ) }</p>
            </div>

                {!props.read && <StopRoundedIcon className = ""/>}

        </div>
    )
}

export default Chat;
