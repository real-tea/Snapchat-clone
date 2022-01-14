import './chats.css';
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

const Chats = () => {
    return (
        <div className = "chats">
            <div className = "chats__header">
                <Avatar className = "chats__avatar"/>
                <div className = "chats__search">
                    <SearchIcon/>
                    <input placeholder = "friends" type = "text"/>
            
                </div>
                <ChatBubbleIcon className = "chat__chatIcon"/>
                
            </div>
            <div className = "chats__posts">
                <h2>HELOO</h2>
            </div>
        </div>
    )
}

export default Chats;
