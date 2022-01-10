import { useEffect } from 'react';
import './Preview.css';
import { useDispatch , useSelector } from "react-redux";
import { selectCameraImage , resetCameraImage } from './features/cameraSlice';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CreateIcon from '@material-ui/icons/Create';
import NoteIcon from '@material-ui/icons/Note';
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CropIcon from '@material-ui/icons/Crop';
import TimerIcon from '@material-ui/icons/Timer';
import SendIcon from '@material-ui/icons/Send';

import { v4 as uuid } from 'uuid';
import { storage , db } from './firebase';
import firebase from 'firebase/compat/app';

const Preview = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cameraImage = useSelector(selectCameraImage);
    useEffect(()=>{
        if (!cameraImage){
            navigate('/');
        }
    },[ cameraImage , navigate ])

    const closePreview = () => {
        dispatch(resetCameraImage());
        
    }
    
    const sendPost = () => {
        const id = uuid(); 
        const uploadTask = storage
        .ref(`posts/${id}`)
        .putString(cameraImage,"data_url"); 
    
    uploadTask.on(
        "state_changed",
        null,
        (error)=>{
            //when error is  encountered
            console.log(error)
        },()=>{
            storage
            .ref("posts")
            .child(id)
            .getDownloadURL()
            .then((url) =>{
                db.collection("posts").add({
                    imageUrl : url,
                    username : "Akash",
                    read : false,
                    timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                    //profile pic -> after firebase authentication 
                });
                navigate("/chats");
            }); 
        }
    );
    };

    return (
        <div className = "previewImage">            
            <CloseIcon onClick = { closePreview } className = "preview__close"/>
            <div className = "preview__toolbarRight">
                <TextFieldsIcon/>
                <CreateIcon/>
                <NoteIcon/>
                <MusicNoteIcon/>
                <AttachFileIcon/>
                <CropIcon/>
                <TimerIcon/>
            </div>

            <img src = { cameraImage } alt = " "/>
            <div onClick = { sendPost } className =  "preview__footer">
                <h2>Send Now</h2>
                <SendIcon font-size = "small" className = "preview__sendIcon"/>
                
            </div>
        </div>
        
)}
 
export default Preview
