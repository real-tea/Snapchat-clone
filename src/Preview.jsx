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

            <img src = { cameraImage }/>
            <div classname =  "preview__footer">
                <h2>Send Now</h2>
                <SendIcon className = "preview__sendIcon"/>
                
            </div>
        </div>
        
)}
 
export default Preview
