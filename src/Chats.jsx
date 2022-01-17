import { useState , useEffect} from 'react';
import './chats.css';
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { db } from './firebase';
import Chat from './Chat';
import { useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';


const Chats = () => {

    const [ posts , setPosts ] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() =>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snap )=>
            setPosts(snap.docs.map((doc) =>({ 
                id : doc.id,
                data : doc.data(),
            })))
        )     
    },[])

    

    const takeSnap = () =>{

    }

    return (
        <div className = "chats">
            <div className = "chats__header">
                <Avatar src = { user.profilePic } onClick = {()=>{
                    user.signOut();
                } }className = "chats__avatar"/>
                <div className = "chats__search">
                    <SearchIcon/>
                    <input placeholder = "friends" type = "text"/>
            
                </div>
                <ChatBubbleIcon className = "chat__chatIcon"/>
                
            </div>
            <div className = "chats__posts">
                {posts.map(({
                    id,
                    data : {profilePic , username , timestamp , imageUrl , read},
                }) =>(
                    <Chat
                    key = {id}
                    id = {id}
                    username = {username}
                    timestamp = {timestamp}
                    profilPic = {profilePic}
                    imageUrl = {imageUrl}
                    read = { read} 
                    />
                )
                ) }
            </div>
            <RadioButtonUncheckedIcon
                    className = "chats__takePicIcon"
                    onClick = {takeSnap}
                    fontsize = 'large'
                    />
        </div>
    )
}

export default Chats;
